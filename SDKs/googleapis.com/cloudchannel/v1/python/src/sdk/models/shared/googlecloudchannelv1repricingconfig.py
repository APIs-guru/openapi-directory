from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudChannelV1RepricingConfigRebillingBasisEnum(str, Enum):
    REBILLING_BASIS_UNSPECIFIED = "REBILLING_BASIS_UNSPECIFIED"
    COST_AT_LIST = "COST_AT_LIST"
    DIRECT_CUSTOMER_COST = "DIRECT_CUSTOMER_COST"


@dataclass_json
@dataclass
class GoogleCloudChannelV1RepricingConfig:
    r"""GoogleCloudChannelV1RepricingConfig
    Configuration for repricing a Google bill over a period of time.
    """
    
    adjustment: Optional[GoogleCloudChannelV1RepricingAdjustment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustment') }})
    channel_partner_granularity: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelPartnerGranularity') }})
    effective_invoice_month: Optional[GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveInvoiceMonth') }})
    entitlement_granularity: Optional[GoogleCloudChannelV1RepricingConfigEntitlementGranularity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entitlementGranularity') }})
    rebilling_basis: Optional[GoogleCloudChannelV1RepricingConfigRebillingBasisEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebillingBasis') }})
    
