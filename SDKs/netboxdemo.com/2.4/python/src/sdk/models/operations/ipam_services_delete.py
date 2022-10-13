from dataclasses import dataclass, field



@dataclass
class IpamServicesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamServicesDeleteRequest:
    path_params: IpamServicesDeletePathParams = field(default=None)
    

@dataclass
class IpamServicesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
