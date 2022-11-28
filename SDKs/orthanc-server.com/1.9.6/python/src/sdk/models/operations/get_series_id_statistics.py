from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSeriesIDStatisticsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDStatisticsRequest:
    path_params: GetSeriesIDStatisticsPathParams = field()
    

@dataclass
class GetSeriesIDStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    get_series_id_statistics_200_application_json_any: Optional[Any] = field(default=None)
    
