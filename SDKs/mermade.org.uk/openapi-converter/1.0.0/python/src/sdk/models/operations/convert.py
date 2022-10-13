from dataclasses import dataclass, field
from typing import Any,Enum,Optional

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
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    convert_200_application_json_any: Optional[Any] = field(default=None)
    convert_400_application_json_any: Optional[Any] = field(default=None)
    
