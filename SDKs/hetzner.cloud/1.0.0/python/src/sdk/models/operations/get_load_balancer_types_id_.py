from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetLoadBalancerTypesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLoadBalancerTypesIDRequest:
    path_params: GetLoadBalancerTypesIDPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceHourly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceMonthly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePrices:
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    price_hourly: GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceHourly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_hourly' }})
    price_monthly: GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceMonthly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypesID200ApplicationJSONLoadBalancerType:
    deprecated: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    max_assigned_certificates: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_assigned_certificates' }})
    max_connections: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_connections' }})
    max_services: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_services' }})
    max_targets: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_targets' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prices: List[GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypesID200ApplicationJSON:
    load_balancer_type: Optional[GetLoadBalancerTypesID200ApplicationJSONLoadBalancerType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancer_type' }})
    

@dataclass
class GetLoadBalancerTypesIDResponse:
    content_type: str = field(default=None)
    get_load_balancer_types_id_200_application_json_object: Optional[GetLoadBalancerTypesID200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
