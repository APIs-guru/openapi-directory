from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetV1IDOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetV1IDOutputFormatPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    output_format: GetV1IDOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'output_format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1IDOutputFormatQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    expired: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'expired', 'style': 'form', 'explode': True }})
    poc: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'poc', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV1IDOutputFormatRequest:
    path_params: GetV1IDOutputFormatPathParams = field()
    query_params: GetV1IDOutputFormatQueryParams = field()
    

@dataclass
class GetV1IDOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
