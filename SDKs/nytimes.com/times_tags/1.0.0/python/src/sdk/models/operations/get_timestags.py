from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetTimestagsFilterEnum(str, Enum):
    DES = "Des"
    GEO = "Geo"
    ORG = "Org"
    PER = "Per"


@dataclass
class GetTimestagsQueryParams:
    filter: Optional[GetTimestagsFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTimestagsRequest:
    query_params: GetTimestagsQueryParams = field(default=None)
    

@dataclass
class GetTimestagsResponse:
    content_type: str = field(default=None)
    get_timestags_200_application_json_arrays: Optional[List[List[str]]] = field(default=None)
    status_code: int = field(default=None)
    
