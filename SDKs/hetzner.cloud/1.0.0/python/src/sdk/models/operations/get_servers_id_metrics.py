from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetServersIDMetricsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetServersIDMetricsTypeEnum(str, Enum):
    CPU = "cpu"
    DISK = "disk"
    NETWORK = "network"


@dataclass
class GetServersIDMetricsQueryParams:
    end: str = field(metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    start: str = field(metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    type: GetServersIDMetricsTypeEnum = field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    step: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'step', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetServersIDMetrics200ApplicationJSONMetricsTimeSeries:
    values: List[List[Any]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclass_json
@dataclass
class GetServersIDMetrics200ApplicationJSONMetrics:
    end: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    step: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('step') }})
    time_series: dict[str, GetServersIDMetrics200ApplicationJSONMetricsTimeSeries] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_series') }})
    

@dataclass_json
@dataclass
class GetServersIDMetrics200ApplicationJSON:
    metrics: GetServersIDMetrics200ApplicationJSONMetrics = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    

@dataclass
class GetServersIDMetricsRequest:
    path_params: GetServersIDMetricsPathParams = field()
    query_params: GetServersIDMetricsQueryParams = field()
    

@dataclass
class GetServersIDMetricsResponse:
    content_type: str = field()
    status_code: int = field()
    get_servers_id_metrics_200_application_json_object: Optional[GetServersIDMetrics200ApplicationJSON] = field(default=None)
    
