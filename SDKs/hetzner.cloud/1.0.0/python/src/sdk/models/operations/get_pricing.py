from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingFloatingIPPriceMonthly:
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingFloatingIP:
    r"""GetPricing200ApplicationJSONPricingFloatingIP
    The cost of one Floating IP per month
    """
    
    price_monthly: GetPricing200ApplicationJSONPricingFloatingIPPriceMonthly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingFloatingIpsPricesPriceMonthly:
    r"""GetPricing200ApplicationJSONPricingFloatingIpsPricesPriceMonthly
    Monthly costs for a Floating IP type in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingFloatingIpsPrices:
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_monthly: GetPricing200ApplicationJSONPricingFloatingIpsPricesPriceMonthly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    
class GetPricing200ApplicationJSONPricingFloatingIpsTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"


@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingFloatingIps:
    prices: List[GetPricing200ApplicationJSONPricingFloatingIpsPrices] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    type: GetPricing200ApplicationJSONPricingFloatingIpsTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingImagePricePerGbMonth:
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingImage:
    r"""GetPricing200ApplicationJSONPricingImage
    The cost of Image per GB/month
    """
    
    price_per_gb_month: GetPricing200ApplicationJSONPricingImagePricePerGbMonth = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_per_gb_month') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceHourly:
    r"""GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceHourly
    Hourly costs for a Load Balancer type in this network zone
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceMonthly:
    r"""GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceMonthly
    Monthly costs for a Load Balancer type in this network zone
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingLoadBalancerTypesPrices:
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceHourly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceMonthly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingLoadBalancerTypes:
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: List[GetPricing200ApplicationJSONPricingLoadBalancerTypesPrices] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingServerBackup:
    r"""GetPricing200ApplicationJSONPricingServerBackup
    Will increase base Server costs by specific percentage
    """
    
    percentage: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingServerTypesPricesPriceHourly:
    r"""GetPricing200ApplicationJSONPricingServerTypesPricesPriceHourly
    Hourly costs for a Server type in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingServerTypesPricesPriceMonthly:
    r"""GetPricing200ApplicationJSONPricingServerTypesPricesPriceMonthly
    Monthly costs for a Server type in this Location
    """
    
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingServerTypesPrices:
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    price_hourly: GetPricing200ApplicationJSONPricingServerTypesPricesPriceHourly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: GetPricing200ApplicationJSONPricingServerTypesPricesPriceMonthly = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingServerTypes:
    id: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prices: List[GetPricing200ApplicationJSONPricingServerTypesPrices] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingTrafficPricePerTb:
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingTraffic:
    r"""GetPricing200ApplicationJSONPricingTraffic
    The cost of additional traffic per TB
    """
    
    price_per_tb: GetPricing200ApplicationJSONPricingTrafficPricePerTb = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_per_tb') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingVolumePricePerGbMonth:
    gross: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross') }})
    net: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('net') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingVolume:
    r"""GetPricing200ApplicationJSONPricingVolume
    The cost of Volume per GB/month
    """
    
    price_per_gb_month: GetPricing200ApplicationJSONPricingVolumePricePerGbMonth = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_per_gb_month') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricing:
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    floating_ip: GetPricing200ApplicationJSONPricingFloatingIP = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ip') }})
    floating_ips: List[GetPricing200ApplicationJSONPricingFloatingIps] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ips') }})
    image: GetPricing200ApplicationJSONPricingImage = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    load_balancer_types: List[GetPricing200ApplicationJSONPricingLoadBalancerTypes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancer_types') }})
    server_backup: GetPricing200ApplicationJSONPricingServerBackup = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_backup') }})
    server_types: List[GetPricing200ApplicationJSONPricingServerTypes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server_types') }})
    traffic: GetPricing200ApplicationJSONPricingTraffic = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('traffic') }})
    vat_rate: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vat_rate') }})
    volume: GetPricing200ApplicationJSONPricingVolume = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSON:
    pricing: GetPricing200ApplicationJSONPricing = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricing') }})
    

@dataclass
class GetPricingResponse:
    content_type: str = field()
    status_code: int = field()
    get_pricing_200_application_json_object: Optional[GetPricing200ApplicationJSON] = field(default=None)
    
