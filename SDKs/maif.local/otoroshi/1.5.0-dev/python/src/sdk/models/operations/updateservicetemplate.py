from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateServiceTemplatePathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceTemplateSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceTemplateRequest:
    path_params: UpdateServiceTemplatePathParams = field()
    security: UpdateServiceTemplateSecurity = field()
    request: Optional[shared.ErrorTemplate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateServiceTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    error_template: Optional[shared.ErrorTemplate] = field(default=None)
    
