from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ValidateRequestBody:
    filename: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'filename' }})
    source: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'source' }})
    

@dataclass
class ValidateRequest:
    request: Optional[ValidateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ValidateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    validate_400_application_json_any: Optional[Any] = field(default=None)
    validation_result: Optional[shared.ValidationResult] = field(default=None)
    
