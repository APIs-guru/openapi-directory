from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutGroupGroupTitlePathParams:
    group_title: str = field(metadata={'path_param': { 'field_name': 'group_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutGroupGroupTitleSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutGroupGroupTitleRequest:
    path_params: PutGroupGroupTitlePathParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    security: PutGroupGroupTitleSecurity = field()
    

@dataclass
class PutGroupGroupTitleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
