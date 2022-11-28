from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAPIKeyPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAPIKeySecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAPIKeyRequest:
    path_params: UpdateAPIKeyPathParams = field()
    security: UpdateAPIKeySecurity = field()
    request: Optional[shared.APIKey] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAPIKeyResponse:
    content_type: str = field()
    status_code: int = field()
    api_key: Optional[shared.APIKey] = field(default=None)
    
