from dataclasses import dataclass, field



@dataclass
class IpamRirsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamRirsDeleteRequest:
    path_params: IpamRirsDeletePathParams = field()
    

@dataclass
class IpamRirsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
