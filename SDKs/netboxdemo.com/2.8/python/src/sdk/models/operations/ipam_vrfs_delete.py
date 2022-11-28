from dataclasses import dataclass, field



@dataclass
class IpamVrfsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamVrfsDeleteRequest:
    path_params: IpamVrfsDeletePathParams = field()
    

@dataclass
class IpamVrfsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
