from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateServicePathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceRequest:
    path_params: UpdateServicePathParams = field()
    security: UpdateServiceSecurity = field()
    request: Optional[shared.Service] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateServiceResponse:
    content_type: str = field()
    status_code: int = field()
    service: Optional[shared.Service] = field(default=None)
    
