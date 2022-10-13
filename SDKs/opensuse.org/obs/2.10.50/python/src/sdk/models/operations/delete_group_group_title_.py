from dataclasses import dataclass, field



@dataclass
class DeleteGroupGroupTitlePathParams:
    group_title: str = field(default=None, metadata={'path_param': { 'field_name': 'group_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGroupGroupTitleSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteGroupGroupTitleRequest:
    path_params: DeleteGroupGroupTitlePathParams = field(default=None)
    security: DeleteGroupGroupTitleSecurity = field(default=None)
    

@dataclass
class DeleteGroupGroupTitleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
