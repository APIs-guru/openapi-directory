from dataclasses import dataclass, field



@dataclass
class IpamRirsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamRirsDeleteRequest:
    path_params: IpamRirsDeletePathParams = field(default=None)
    

@dataclass
class IpamRirsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
