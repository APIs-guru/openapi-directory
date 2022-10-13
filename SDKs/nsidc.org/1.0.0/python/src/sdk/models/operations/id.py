from dataclasses import dataclass, field
from typing import Enum,Optional

class IDSourceEnum(str, Enum):
    NSIDC = "NSIDC"
    ADE = "ADE"


@dataclass
class IDQueryParams:
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    source: IDSourceEnum = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    

@dataclass
class IDRequest:
    query_params: IDQueryParams = field(default=None)
    

@dataclass
class IDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    id_200_application_x_suggestions_plus_json_string: Optional[str] = field(default=None)
    
