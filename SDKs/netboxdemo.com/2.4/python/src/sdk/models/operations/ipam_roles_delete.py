from dataclasses import dataclass, field



@dataclass
class IpamRolesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamRolesDeleteRequest:
    path_params: IpamRolesDeletePathParams = field()
    

@dataclass
class IpamRolesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
