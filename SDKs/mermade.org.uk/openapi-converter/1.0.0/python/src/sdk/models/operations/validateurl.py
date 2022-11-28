from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ValidateURLQueryParams:
    url: str = field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class ValidateURLRequest:
    query_params: ValidateURLQueryParams = field()
    

@dataclass
class ValidateURLResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    validation_result: Optional[shared.ValidationResult] = field(default=None)
    
