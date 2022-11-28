from dataclasses import dataclass, field
from enum import Enum

class GetFeatureCategoriesOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetFeatureCategoriesQueryParams:
    output_format: GetFeatureCategoriesOutputFormatEnum = field(metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFeatureCategoriesRequest:
    query_params: GetFeatureCategoriesQueryParams = field()
    

@dataclass
class GetFeatureCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    
