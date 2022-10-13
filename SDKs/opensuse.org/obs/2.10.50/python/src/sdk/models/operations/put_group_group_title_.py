from dataclasses import dataclass, field



@dataclass
class PutGroupGroupTitlePathParams:
    group_title: str = field(default=None, metadata={'path_param': { 'field_name': 'group_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutGroupGroupTitleSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutGroupGroupTitleRequest:
    path_params: PutGroupGroupTitlePathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    security: PutGroupGroupTitleSecurity = field(default=None)
    

@dataclass
class PutGroupGroupTitleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
