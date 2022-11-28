from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetLoadBalancerTypesQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceHourly:
    r"""GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceHourly
    Hourly costs for a Resource in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceMonthly:
    r"""GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceMonthly
    Monthly costs for a Resource in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPrices:
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceHourly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceMonthly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypes:
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_assigned_certificates: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_assigned_certificates') }})
    max_connections: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_connections') }})
    max_services: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_services') }})
    max_targets: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_targets') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: List[GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPrices] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    

@dataclass_json
@dataclass
class GetLoadBalancerTypes200ApplicationJSON:
    load_balancer_types: List[GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_types') }})
    

@dataclass
class GetLoadBalancerTypesRequest:
    query_params: GetLoadBalancerTypesQueryParams = field()
    

@dataclass
class GetLoadBalancerTypesResponse:
    content_type: str = field()
    status_code: int = field()
    get_load_balancer_types_200_application_json_object: Optional[GetLoadBalancerTypes200ApplicationJSON] = field(default=None)
    
