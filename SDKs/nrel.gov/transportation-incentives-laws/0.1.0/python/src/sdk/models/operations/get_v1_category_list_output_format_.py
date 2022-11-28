from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetV1CategoryListOutputFormatOutputFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetV1CategoryListOutputFormatPathParams:
    output_format: GetV1CategoryListOutputFormatOutputFormatEnum = field(metadata={'path_param': { 'field_name': 'output_format', 'style': 'simple', 'explode': False }})
    
class GetV1CategoryListOutputFormatTypeEnum(str, Enum):
    TECH = "tech"
    USER = "user"
    REGULATION = "regulation"
    INCENTIVE = "incentive"


@dataclass
class GetV1CategoryListOutputFormatQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    type: Optional[GetV1CategoryListOutputFormatTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV1CategoryListOutputFormatRequest:
    path_params: GetV1CategoryListOutputFormatPathParams = field()
    query_params: GetV1CategoryListOutputFormatQueryParams = field()
    

@dataclass
class GetV1CategoryListOutputFormatResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
