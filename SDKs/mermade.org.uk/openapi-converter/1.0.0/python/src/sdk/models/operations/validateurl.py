from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ValidateURLQueryParams:
    url: str = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class ValidateURLRequest:
    query_params: ValidateURLQueryParams = field(default=None)
    

@dataclass
class ValidateURLResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validation_result: Optional[shared.ValidationResult] = field(default=None)
    
