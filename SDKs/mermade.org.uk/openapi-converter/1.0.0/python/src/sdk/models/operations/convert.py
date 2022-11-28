from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum

class ConvertRequestBodyValidateEnum(str, Enum):
    ON = "on"


@dataclass
class ConvertRequestBody:
    filename: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'filename' }})
    source: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'source' }})
    validate: Optional[ConvertRequestBodyValidateEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'validate' }})
    

@dataclass
class ConvertRequest:
    request: Optional[ConvertRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ConvertResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    convert_200_application_json_any: Optional[Any] = field(default=None)
    convert_400_application_json_any: Optional[Any] = field(default=None)
    
