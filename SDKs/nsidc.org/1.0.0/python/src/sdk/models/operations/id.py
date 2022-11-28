from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class IDSourceEnum(str, Enum):
    NSIDC = "NSIDC"
    ADE = "ADE"


@dataclass
class IDQueryParams:
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    source: IDSourceEnum = field(metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    

@dataclass
class IDRequest:
    query_params: IDQueryParams = field()
    

@dataclass
class IDResponse:
    content_type: str = field()
    status_code: int = field()
    id_200_application_x_suggestions_plus_json_string: Optional[str] = field(default=None)
    
