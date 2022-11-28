from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetModalitiesQueryParams:
    expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModalitiesRequest:
    query_params: GetModalitiesQueryParams = field()
    

@dataclass
class GetModalitiesResponse:
    content_type: str = field()
    status_code: int = field()
    get_modalities_200_application_json_any: Optional[Any] = field(default=None)
    
