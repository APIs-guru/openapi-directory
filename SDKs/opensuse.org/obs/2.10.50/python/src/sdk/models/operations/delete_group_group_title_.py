from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteGroupGroupTitlePathParams:
    group_title: str = field(metadata={'path_param': { 'field_name': 'group_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGroupGroupTitleSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteGroupGroupTitleRequest:
    path_params: DeleteGroupGroupTitlePathParams = field()
    security: DeleteGroupGroupTitleSecurity = field()
    

@dataclass
class DeleteGroupGroupTitleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
