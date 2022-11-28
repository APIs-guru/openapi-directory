from dataclasses import dataclass, field
from enum import Enum

class GetNameAuthoritiesOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetNameAuthoritiesQueryParams:
    output_format: GetNameAuthoritiesOutputFormatEnum = field(metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNameAuthoritiesRequest:
    query_params: GetNameAuthoritiesQueryParams = field()
    

@dataclass
class GetNameAuthoritiesResponse:
    content_type: str = field()
    status_code: int = field()
    
