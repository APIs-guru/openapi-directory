from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1Offer:
    r"""GoogleCloudChannelV1Offer
    Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying.
    """
    
    constraints: Optional[GoogleCloudChannelV1Constraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    deal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealCode') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    marketing_info: Optional[GoogleCloudChannelV1MarketingInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketingInfo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameter_definitions: Optional[List[GoogleCloudChannelV1ParameterDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterDefinitions') }})
    plan: Optional[GoogleCloudChannelV1Plan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    price_by_resources: Optional[List[GoogleCloudChannelV1PriceByResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceByResources') }})
    sku: Optional[GoogleCloudChannelV1Sku] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
