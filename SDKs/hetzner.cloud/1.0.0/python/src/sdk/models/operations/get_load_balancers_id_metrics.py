from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetLoadBalancersIDMetricsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetLoadBalancersIDMetricsTypeEnum(str, Enum):
    OPEN_CONNECTIONS = "open_connections"
    CONNECTIONS_PER_SECOND = "connections_per_second"
    REQUESTS_PER_SECOND = "requests_per_second"
    BANDWIDTH = "bandwidth"


@dataclass
class GetLoadBalancersIDMetricsQueryParams:
    end: str = field(metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    start: str = field(metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    type: GetLoadBalancersIDMetricsTypeEnum = field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    step: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'step', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDMetrics200ApplicationJSONMetricsTimeSeries:
    values: List[List[Any]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDMetrics200ApplicationJSONMetrics:
    end: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    step: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('step') }})
    time_series: dict[str, GetLoadBalancersIDMetrics200ApplicationJSONMetricsTimeSeries] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_series') }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDMetrics200ApplicationJSON:
    metrics: GetLoadBalancersIDMetrics200ApplicationJSONMetrics = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    

@dataclass
class GetLoadBalancersIDMetricsRequest:
    path_params: GetLoadBalancersIDMetricsPathParams = field()
    query_params: GetLoadBalancersIDMetricsQueryParams = field()
    

@dataclass
class GetLoadBalancersIDMetricsResponse:
    content_type: str = field()
    status_code: int = field()
    get_load_balancers_id_metrics_200_application_json_object: Optional[GetLoadBalancersIDMetrics200ApplicationJSON] = field(default=None)
    
