from dataclasses import dataclass, field



@dataclass
class IpamAggregatesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamAggregatesDeleteRequest:
    path_params: IpamAggregatesDeletePathParams = field()
    

@dataclass
class IpamAggregatesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
