from dataclasses import dataclass, field



@dataclass
class IpamPrefixesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamPrefixesDeleteRequest:
    path_params: IpamPrefixesDeletePathParams = field(default=None)
    

@dataclass
class IpamPrefixesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
