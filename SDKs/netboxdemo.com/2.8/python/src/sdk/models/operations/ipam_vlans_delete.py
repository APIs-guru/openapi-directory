from dataclasses import dataclass, field



@dataclass
class IpamVlansDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVlansDeleteRequest:
    path_params: IpamVlansDeletePathParams = field(default=None)
    

@dataclass
class IpamVlansDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
