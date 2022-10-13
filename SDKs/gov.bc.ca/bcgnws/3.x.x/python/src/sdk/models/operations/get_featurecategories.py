from dataclasses import dataclass, field
from typing import Enum

class GetFeatureCategoriesOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetFeatureCategoriesQueryParams:
    output_format: GetFeatureCategoriesOutputFormatEnum = field(default=None, metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFeatureCategoriesRequest:
    query_params: GetFeatureCategoriesQueryParams = field(default=None)
    

@dataclass
class GetFeatureCategoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
