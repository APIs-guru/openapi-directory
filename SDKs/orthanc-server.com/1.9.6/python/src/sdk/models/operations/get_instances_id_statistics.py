from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDStatisticsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDStatisticsRequest:
    path_params: GetInstancesIDStatisticsPathParams = field()
    

@dataclass
class GetInstancesIDStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    get_instances_id_statistics_200_application_json_any: Optional[Any] = field(default=None)
    
