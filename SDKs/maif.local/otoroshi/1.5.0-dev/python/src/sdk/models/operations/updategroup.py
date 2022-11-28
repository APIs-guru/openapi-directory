from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupPathParams:
    service_group_id: str = field(metadata={'path_param': { 'field_name': 'serviceGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateGroupRequest:
    path_params: UpdateGroupPathParams = field()
    security: UpdateGroupSecurity = field()
    request: Optional[shared.Group] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateGroupResponse:
    content_type: str = field()
    status_code: int = field()
    group: Optional[shared.Group] = field(default=None)
    
