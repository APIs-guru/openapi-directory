from dataclasses import dataclass, field
from enum import Enum

class GetFeatureTypesOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetFeatureTypesQueryParams:
    output_format: GetFeatureTypesOutputFormatEnum = field(metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFeatureTypesRequest:
    query_params: GetFeatureTypesQueryParams = field()
    

@dataclass
class GetFeatureTypesResponse:
    content_type: str = field()
    status_code: int = field()
    
