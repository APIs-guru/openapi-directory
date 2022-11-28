from dataclasses import dataclass, field



@dataclass
class IpamVlansDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVlansDeleteRequest:
    path_params: IpamVlansDeletePathParams = field()
    

@dataclass
class IpamVlansDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
