from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetLoadBalancersIDMetricsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetLoadBalancersIDMetricsTypeEnum(str, Enum):
    OPEN_CONNECTIONS = "open_connections"
    CONNECTIONS_PER_SECOND = "connections_per_second"
    REQUESTS_PER_SECOND = "requests_per_second"
    BANDWIDTH = "bandwidth"


@dataclass
class GetLoadBalancersIDMetricsQueryParams:
    end: str = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    start: str = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    step: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'step', 'style': 'form', 'explode': True }})
    type: GetLoadBalancersIDMetricsTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLoadBalancersIDMetricsRequest:
    path_params: GetLoadBalancersIDMetricsPathParams = field(default=None)
    query_params: GetLoadBalancersIDMetricsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLoadBalancersIDMetrics200ApplicationJSONMetricsTimeSeries:
    values: List[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDMetrics200ApplicationJSONMetrics:
    end: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    step: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'step' }})
    time_series: dict[str, GetLoadBalancersIDMetrics200ApplicationJSONMetricsTimeSeries] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_series' }})
    

@dataclass_json
@dataclass
class GetLoadBalancersIDMetrics200ApplicationJSON:
    metrics: GetLoadBalancersIDMetrics200ApplicationJSONMetrics = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    

@dataclass
class GetLoadBalancersIDMetricsResponse:
    content_type: str = field(default=None)
    get_load_balancers_id_metrics_200_application_json_object: Optional[GetLoadBalancersIDMetrics200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
