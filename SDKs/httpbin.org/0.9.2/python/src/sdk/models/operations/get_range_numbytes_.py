from dataclasses import dataclass, field



@dataclass
class GetRangeNumbytesPathParams:
    numbytes: int = field(default=None, metadata={'path_param': { 'field_name': 'numbytes', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRangeNumbytesRequest:
    path_params: GetRangeNumbytesPathParams = field(default=None)
    

@dataclass
class GetRangeNumbytesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
