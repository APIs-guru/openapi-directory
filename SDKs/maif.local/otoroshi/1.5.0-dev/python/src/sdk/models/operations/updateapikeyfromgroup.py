from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAPIKeyFromGroupPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    group_id: str = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAPIKeyFromGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAPIKeyFromGroupRequest:
    path_params: UpdateAPIKeyFromGroupPathParams = field()
    security: UpdateAPIKeyFromGroupSecurity = field()
    request: Optional[shared.APIKey] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAPIKeyFromGroupResponse:
    content_type: str = field()
    status_code: int = field()
    api_key: Optional[shared.APIKey] = field(default=None)
    
