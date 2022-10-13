from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetServersIDMetricsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetServersIDMetricsTypeEnum(str, Enum):
    CPU = "cpu"
    DISK = "disk"
    NETWORK = "network"


@dataclass
class GetServersIDMetricsQueryParams:
    end: str = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    start: str = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    step: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'step', 'style': 'form', 'explode': True }})
    type: GetServersIDMetricsTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetServersIDMetricsRequest:
    path_params: GetServersIDMetricsPathParams = field(default=None)
    query_params: GetServersIDMetricsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetServersIDMetrics200ApplicationJSONMetricsTimeSeries:
    values: List[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    

@dataclass_json
@dataclass
class GetServersIDMetrics200ApplicationJSONMetrics:
    end: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    step: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'step' }})
    time_series: dict[str, GetServersIDMetrics200ApplicationJSONMetricsTimeSeries] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_series' }})
    

@dataclass_json
@dataclass
class GetServersIDMetrics200ApplicationJSON:
    metrics: GetServersIDMetrics200ApplicationJSONMetrics = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    

@dataclass
class GetServersIDMetricsResponse:
    content_type: str = field(default=None)
    get_servers_id_metrics_200_application_json_object: Optional[GetServersIDMetrics200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
