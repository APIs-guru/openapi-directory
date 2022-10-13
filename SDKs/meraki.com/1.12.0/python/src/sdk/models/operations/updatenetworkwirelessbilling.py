from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessBillingPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits:
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitDown' }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitUp' }})
    
class UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum(str, Enum):
    ONE_HOUR = "1 hour"
    ONE_DAY = "1 day"
    ONE_WEEK = "1 week"
    THIRTY_DAYS = "30 days"


@dataclass_json
@dataclass
class UpdateNetworkWirelessBillingRequestBodyPlans:
    bandwidth_limits: UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandwidthLimits' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    price: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    time_limit: UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeLimit' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessBillingRequestBody:
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    plans: Optional[List[UpdateNetworkWirelessBillingRequestBodyPlans]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plans' }})
    

@dataclass
class UpdateNetworkWirelessBillingRequest:
    path_params: UpdateNetworkWirelessBillingPathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessBillingRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessBillingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_billing_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
