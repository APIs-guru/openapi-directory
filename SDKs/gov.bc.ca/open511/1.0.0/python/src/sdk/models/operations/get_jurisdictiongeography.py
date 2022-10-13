from dataclasses import dataclass, field
from typing import Enum,Optional

class GetJurisdictiongeographyFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetJurisdictiongeographyQueryParams:
    format: Optional[GetJurisdictiongeographyFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJurisdictiongeographyRequest:
    query_params: GetJurisdictiongeographyQueryParams = field(default=None)
    

@dataclass
class GetJurisdictiongeographyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
