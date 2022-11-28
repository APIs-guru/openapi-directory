from dataclasses import dataclass, field



@dataclass
class IpamServicesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamServicesDeleteRequest:
    path_params: IpamServicesDeletePathParams = field()
    

@dataclass
class IpamServicesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
