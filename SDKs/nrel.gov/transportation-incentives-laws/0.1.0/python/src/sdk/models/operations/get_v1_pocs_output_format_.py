from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetV1PocsOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetV1PocsOutputFormatPathParams:
    output_format: GetV1PocsOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'output_format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1PocsOutputFormatQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    jurisdiction: str = field(metadata={'query_param': { 'field_name': 'jurisdiction', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV1PocsOutputFormatRequest:
    path_params: GetV1PocsOutputFormatPathParams = field()
    query_params: GetV1PocsOutputFormatQueryParams = field()
    

@dataclass
class GetV1PocsOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
