from dataclasses import dataclass, field



@dataclass
class IpamAggregatesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamAggregatesDeleteRequest:
    path_params: IpamAggregatesDeletePathParams = field(default=None)
    

@dataclass
class IpamAggregatesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
