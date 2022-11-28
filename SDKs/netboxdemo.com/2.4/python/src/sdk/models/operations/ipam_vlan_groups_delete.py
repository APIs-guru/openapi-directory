from dataclasses import dataclass, field



@dataclass
class IpamVlanGroupsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVlanGroupsDeleteRequest:
    path_params: IpamVlanGroupsDeletePathParams = field()
    

@dataclass
class IpamVlanGroupsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
