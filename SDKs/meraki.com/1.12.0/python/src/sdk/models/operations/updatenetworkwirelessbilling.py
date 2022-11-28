from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkWirelessBillingPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits:
    r"""UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits
    The uplink bandwidth settings for the pricing plan.
    """
    
    limit_down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    
class UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum(str, Enum):
    ONE_HOUR = "1 hour"
    ONE_DAY = "1 day"
    ONE_WEEK = "1 week"
    THIRTY_DAYS = "30 days"


@dataclass_json
@dataclass
class UpdateNetworkWirelessBillingRequestBodyPlans:
    bandwidth_limits: UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimits') }})
    price: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    time_limit: UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeLimit') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessBillingRequestBody:
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    plans: Optional[List[UpdateNetworkWirelessBillingRequestBodyPlans]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plans') }})
    

@dataclass
class UpdateNetworkWirelessBillingRequest:
    path_params: UpdateNetworkWirelessBillingPathParams = field()
    request: Optional[UpdateNetworkWirelessBillingRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessBillingResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_wireless_billing_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
