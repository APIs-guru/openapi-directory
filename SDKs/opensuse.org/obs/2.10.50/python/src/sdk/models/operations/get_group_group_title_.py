from dataclasses import dataclass, field



@dataclass
class GetGroupGroupTitlePathParams:
    group_title: str = field(default=None, metadata={'path_param': { 'field_name': 'group_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGroupGroupTitleSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetGroupGroupTitleRequest:
    path_params: GetGroupGroupTitlePathParams = field(default=None)
    security: GetGroupGroupTitleSecurity = field(default=None)
    

@dataclass
class GetGroupGroupTitleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
