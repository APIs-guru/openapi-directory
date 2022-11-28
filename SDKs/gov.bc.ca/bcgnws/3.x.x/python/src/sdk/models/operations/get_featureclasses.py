from dataclasses import dataclass, field
from enum import Enum

class GetFeatureClassesOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetFeatureClassesQueryParams:
    output_format: GetFeatureClassesOutputFormatEnum = field(metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFeatureClassesRequest:
    query_params: GetFeatureClassesQueryParams = field()
    

@dataclass
class GetFeatureClassesResponse:
    content_type: str = field()
    status_code: int = field()
    
