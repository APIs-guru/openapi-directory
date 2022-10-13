from dataclasses import dataclass, field



@dataclass
class IpamVlanGroupsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVlanGroupsDeleteRequest:
    path_params: IpamVlanGroupsDeletePathParams = field(default=None)
    

@dataclass
class IpamVlanGroupsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
