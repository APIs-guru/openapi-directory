from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetGroupGroupTitlePathParams:
    group_title: str = field(metadata={'path_param': { 'field_name': 'group_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGroupGroupTitleSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetGroupGroupTitleRequest:
    path_params: GetGroupGroupTitlePathParams = field()
    security: GetGroupGroupTitleSecurity = field()
    

@dataclass
class GetGroupGroupTitleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
