from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetJurisdictionFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetJurisdictionQueryParams:
    format: Optional[GetJurisdictionFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJurisdictionRequest:
    query_params: GetJurisdictionQueryParams = field()
    

@dataclass
class GetJurisdictionResponse:
    content_type: str = field()
    status_code: int = field()
    
