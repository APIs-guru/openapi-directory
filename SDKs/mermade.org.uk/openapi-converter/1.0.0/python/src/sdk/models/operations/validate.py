from dataclasses import dataclass, field
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
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validate_400_application_json_any: Optional[Any] = field(default=None)
    validation_result: Optional[shared.ValidationResult] = field(default=None)
    
