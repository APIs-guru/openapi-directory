from dataclasses import dataclass, field



@dataclass
class IpamRolesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamRolesDeleteRequest:
    path_params: IpamRolesDeletePathParams = field(default=None)
    

@dataclass
class IpamRolesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
