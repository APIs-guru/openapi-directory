from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInstancesIDStatisticsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDStatisticsRequest:
    path_params: GetInstancesIDStatisticsPathParams = field(default=None)
    

@dataclass
class GetInstancesIDStatisticsResponse:
    content_type: str = field(default=None)
    get_instances_id_statistics_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
