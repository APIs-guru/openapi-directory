from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum

class GetTimestagsFilterEnum(str, Enum):
    DES = "Des"
    GEO = "Geo"
    ORG = "Org"
    PER = "Per"


@dataclass
class GetTimestagsQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    filter: Optional[GetTimestagsFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTimestagsRequest:
    query_params: GetTimestagsQueryParams = field()
    

@dataclass
class GetTimestagsResponse:
    content_type: str = field()
    status_code: int = field()
    get_timestags_200_application_json_arrays: Optional[List[List[str]]] = field(default=None)
    
