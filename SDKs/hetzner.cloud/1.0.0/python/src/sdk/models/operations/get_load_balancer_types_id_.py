from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetLoadBalancerTypesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceHourly:
    r"""GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceHourly
    Hourly costs for a Resource in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceMonthly:
    r"""GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceMonthly
    Monthly costs for a Resource in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePrices:
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceHourly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceMonthly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypesID200ApplicationJSONLoadBalancerType:
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_assigned_certificates: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_assigned_certificates') }})
    max_connections: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_connections') }})
    max_services: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_services') }})
    max_targets: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_targets') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: List[GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePrices] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypesID200ApplicationJSON:
    load_balancer_type: Optional[GetLoadBalancerTypesID200ApplicationJSONLoadBalancerType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_type') }})
    

@dataclass
class GetLoadBalancerTypesIDRequest:
    path_params: GetLoadBalancerTypesIDPathParams = field()
    

@dataclass
class GetLoadBalancerTypesIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_load_balancer_types_id_200_application_json_object: Optional[GetLoadBalancerTypesID200ApplicationJSON] = field(default=None)
    
