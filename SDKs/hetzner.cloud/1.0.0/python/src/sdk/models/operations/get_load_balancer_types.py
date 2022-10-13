from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetLoadBalancerTypesQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLoadBalancerTypesRequest:
    query_params: GetLoadBalancerTypesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceHourly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceMonthly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPrices:
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    price_hourly: GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceHourly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_hourly' }})
    price_monthly: GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceMonthly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypes:
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    max_assigned_certificates: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_assigned_certificates' }})
    max_connections: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_connections' }})
    max_services: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_services' }})
    max_targets: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_targets' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prices: List[GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypes200ApplicationJSON:
    load_balancer_types: List[GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancer_types' }})
    

@dataclass
class GetLoadBalancerTypesResponse:
    content_type: str = field(default=None)
    get_load_balancer_types_200_application_json_object: Optional[GetLoadBalancerTypes200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
