from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSeriesIDOrderedSlicesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDOrderedSlicesRequest:
    path_params: GetSeriesIDOrderedSlicesPathParams = field(default=None)
    

@dataclass
class GetSeriesIDOrderedSlicesResponse:
    content_type: str = field(default=None)
    get_series_id_ordered_slices_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
