from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStudiesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDQueryParams:
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudiesIDRequest:
    path_params: GetStudiesIDPathParams = field()
    query_params: GetStudiesIDQueryParams = field()
    

@dataclass
class GetStudiesIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_studies_id_200_application_json_any: Optional[Any] = field(default=None)
    
