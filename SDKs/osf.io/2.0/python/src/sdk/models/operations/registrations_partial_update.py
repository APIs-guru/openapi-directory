from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class RegistrationsPartialUpdatePathParams:
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsPartialUpdateRequest:
    path_params: RegistrationsPartialUpdatePathParams = field()
    

@dataclass
class RegistrationsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    
