from dataclasses import dataclass, field
from typing import Enum

class GetFeatureClassesOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetFeatureClassesQueryParams:
    output_format: GetFeatureClassesOutputFormatEnum = field(default=None, metadata={'query_param': { 'field_name': 'outputFormat', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFeatureClassesRequest:
    query_params: GetFeatureClassesQueryParams = field(default=None)
    

@dataclass
class GetFeatureClassesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
