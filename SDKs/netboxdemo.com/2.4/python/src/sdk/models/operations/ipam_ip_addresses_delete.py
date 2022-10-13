from dataclasses import dataclass, field



@dataclass
class IpamIPAddressesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamIPAddressesDeleteRequest:
    path_params: IpamIPAddressesDeletePathParams = field(default=None)
    

@dataclass
class IpamIPAddressesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
