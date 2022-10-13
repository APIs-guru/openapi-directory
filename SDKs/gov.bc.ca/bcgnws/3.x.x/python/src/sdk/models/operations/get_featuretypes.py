from dataclasses import dataclass, field
from typing import Enum

class GetFeatureTypesOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetFeatureTypesQueryParams:
    output_format: GetFeatureTypesOutputFormatEnum = field(default=None, metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFeatureTypesRequest:
    query_params: GetFeatureTypesQueryParams = field(default=None)
    

@dataclass
class GetFeatureTypesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
