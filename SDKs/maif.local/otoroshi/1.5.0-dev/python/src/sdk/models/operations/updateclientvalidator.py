from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateClientValidatorPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateClientValidatorSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateClientValidatorRequest:
    path_params: UpdateClientValidatorPathParams = field()
    security: UpdateClientValidatorSecurity = field()
    request: Optional[shared.ValidationAuthority] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateClientValidatorResponse:
    content_type: str = field()
    status_code: int = field()
    validation_authority: Optional[shared.ValidationAuthority] = field(default=None)
    
