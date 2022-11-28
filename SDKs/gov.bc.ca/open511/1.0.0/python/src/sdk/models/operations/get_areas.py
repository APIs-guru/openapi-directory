from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetAreasFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetAreasQueryParams:
    format: Optional[GetAreasFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAreasRequest:
    query_params: GetAreasQueryParams = field()
    

@dataclass
class GetAreasResponse:
    content_type: str = field()
    status_code: int = field()
    
