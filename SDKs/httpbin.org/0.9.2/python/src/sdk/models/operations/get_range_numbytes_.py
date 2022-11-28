from dataclasses import dataclass, field



@dataclass
class GetRangeNumbytesPathParams:
    numbytes: int = field(metadata={'path_param': { 'field_name': 'numbytes', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRangeNumbytesRequest:
    path_params: GetRangeNumbytesPathParams = field()
    

@dataclass
class GetRangeNumbytesResponse:
    content_type: str = field()
    status_code: int = field()
    
