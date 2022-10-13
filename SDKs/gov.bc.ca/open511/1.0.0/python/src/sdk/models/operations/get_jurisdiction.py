from dataclasses import dataclass, field
from typing import Enum,Optional

class GetJurisdictionFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetJurisdictionQueryParams:
    format: Optional[GetJurisdictionFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJurisdictionRequest:
    query_params: GetJurisdictionQueryParams = field(default=None)
    

@dataclass
class GetJurisdictionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
