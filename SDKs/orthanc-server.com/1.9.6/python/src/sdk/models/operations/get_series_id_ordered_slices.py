from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSeriesIDOrderedSlicesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDOrderedSlicesRequest:
    path_params: GetSeriesIDOrderedSlicesPathParams = field()
    

@dataclass
class GetSeriesIDOrderedSlicesResponse:
    content_type: str = field()
    status_code: int = field()
    get_series_id_ordered_slices_200_application_json_any: Optional[Any] = field(default=None)
    
