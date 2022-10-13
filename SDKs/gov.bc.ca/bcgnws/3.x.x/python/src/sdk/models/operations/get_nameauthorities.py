from dataclasses import dataclass, field
from typing import Enum

class GetNameAuthoritiesOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetNameAuthoritiesQueryParams:
    output_format: GetNameAuthoritiesOutputFormatEnum = field(default=None, metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNameAuthoritiesRequest:
    query_params: GetNameAuthoritiesQueryParams = field(default=None)
    

@dataclass
class GetNameAuthoritiesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
