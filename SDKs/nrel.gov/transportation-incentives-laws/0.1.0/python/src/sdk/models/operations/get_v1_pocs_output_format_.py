from dataclasses import dataclass, field
from typing import Enum

class GetV1PocsOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetV1PocsOutputFormatPathParams:
    output_format: GetV1PocsOutputFormatOutputFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'output_format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1PocsOutputFormatQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    jurisdiction: str = field(default=None, metadata={'query_param': { 'field_name': 'jurisdiction', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV1PocsOutputFormatRequest:
    path_params: GetV1PocsOutputFormatPathParams = field(default=None)
    query_params: GetV1PocsOutputFormatQueryParams = field(default=None)
    

@dataclass
class GetV1PocsOutputFormatResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
