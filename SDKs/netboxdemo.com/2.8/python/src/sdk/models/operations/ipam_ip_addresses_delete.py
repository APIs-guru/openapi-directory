from dataclasses import dataclass, field



@dataclass
class IpamIPAddressesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamIPAddressesDeleteRequest:
    path_params: IpamIPAddressesDeletePathParams = field()
    

@dataclass
class IpamIPAddressesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
