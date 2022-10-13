from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1repricingadjustment
from . import googletypedate
from . import googlecloudchannelv1repricingconfigentitlementgranularity

class GoogleCloudChannelV1RepricingConfigRebillingBasisEnum(str, Enum):
    REBILLING_BASIS_UNSPECIFIED = "REBILLING_BASIS_UNSPECIFIED"
    COST_AT_LIST = "COST_AT_LIST"
    DIRECT_CUSTOMER_COST = "DIRECT_CUSTOMER_COST"


@dataclass_json
@dataclass
class GoogleCloudChannelV1RepricingConfig:
    adjustment: Optional[googlecloudchannelv1repricingadjustment.GoogleCloudChannelV1RepricingAdjustment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjustment' }})
    channel_partner_granularity: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelPartnerGranularity' }})
    effective_invoice_month: Optional[googletypedate.GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveInvoiceMonth' }})
    entitlement_granularity: Optional[googlecloudchannelv1repricingconfigentitlementgranularity.GoogleCloudChannelV1RepricingConfigEntitlementGranularity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entitlementGranularity' }})
    rebilling_basis: Optional[GoogleCloudChannelV1RepricingConfigRebillingBasisEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rebillingBasis' }})
    
