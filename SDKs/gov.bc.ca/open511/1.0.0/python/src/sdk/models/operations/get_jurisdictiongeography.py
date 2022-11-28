from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetJurisdictiongeographyFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetJurisdictiongeographyQueryParams:
    format: Optional[GetJurisdictiongeographyFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJurisdictiongeographyRequest:
    query_params: GetJurisdictiongeographyQueryParams = field()
    

@dataclass
class GetJurisdictiongeographyResponse:
    content_type: str = field()
    status_code: int = field()
    
