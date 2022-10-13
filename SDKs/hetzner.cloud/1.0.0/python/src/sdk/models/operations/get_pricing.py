from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingFloatingIPPriceMonthly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingFloatingIP:
    price_monthly: GetPricing200ApplicationJSONPricingFloatingIPPriceMonthly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingFloatingIpsPricesPriceMonthly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingFloatingIpsPrices:
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    price_monthly: GetPricing200ApplicationJSONPricingFloatingIpsPricesPriceMonthly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    
class GetPricing200ApplicationJSONPricingFloatingIpsTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"


@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingFloatingIps:
    prices: List[GetPricing200ApplicationJSONPricingFloatingIpsPrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    type: GetPricing200ApplicationJSONPricingFloatingIpsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingImagePricePerGbMonth:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingImage:
    price_per_gb_month: GetPricing200ApplicationJSONPricingImagePricePerGbMonth = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_per_gb_month' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceHourly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceMonthly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingLoadBalancerTypesPrices:
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    price_hourly: GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceHourly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_hourly' }})
    price_monthly: GetPricing200ApplicationJSONPricingLoadBalancerTypesPricesPriceMonthly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingLoadBalancerTypes:
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prices: List[GetPricing200ApplicationJSONPricingLoadBalancerTypesPrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingServerBackup:
    percentage: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingServerTypesPricesPriceHourly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingServerTypesPricesPriceMonthly:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingServerTypesPrices:
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    price_hourly: GetPricing200ApplicationJSONPricingServerTypesPricesPriceHourly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_hourly' }})
    price_monthly: GetPricing200ApplicationJSONPricingServerTypesPricesPriceMonthly = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingServerTypes:
    id: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prices: List[GetPricing200ApplicationJSONPricingServerTypesPrices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingTrafficPricePerTb:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingTraffic:
    price_per_tb: GetPricing200ApplicationJSONPricingTrafficPricePerTb = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_per_tb' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingVolumePricePerGbMonth:
    gross: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross' }})
    net: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricingVolume:
    price_per_gb_month: GetPricing200ApplicationJSONPricingVolumePricePerGbMonth = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_per_gb_month' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSONPricing:
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    floating_ip: GetPricing200ApplicationJSONPricingFloatingIP = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floating_ip' }})
    floating_ips: List[GetPricing200ApplicationJSONPricingFloatingIps] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floating_ips' }})
    image: GetPricing200ApplicationJSONPricingImage = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    load_balancer_types: List[GetPricing200ApplicationJSONPricingLoadBalancerTypes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'load_balancer_types' }})
    server_backup: GetPricing200ApplicationJSONPricingServerBackup = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_backup' }})
    server_types: List[GetPricing200ApplicationJSONPricingServerTypes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'server_types' }})
    traffic: GetPricing200ApplicationJSONPricingTraffic = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traffic' }})
    vat_rate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vat_rate' }})
    volume: GetPricing200ApplicationJSONPricingVolume = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume' }})
    

@dataclass_json
@dataclass
class GetPricing200ApplicationJSON:
    pricing: GetPricing200ApplicationJSONPricing = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing' }})
    

@dataclass
class GetPricingResponse:
    content_type: str = field(default=None)
    get_pricing_200_application_json_object: Optional[GetPricing200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
