from dataclasses import dataclass, field



@dataclass
class IpamVrfsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVrfsDeleteRequest:
    path_params: IpamVrfsDeletePathParams = field(default=None)
    

@dataclass
class IpamVrfsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
