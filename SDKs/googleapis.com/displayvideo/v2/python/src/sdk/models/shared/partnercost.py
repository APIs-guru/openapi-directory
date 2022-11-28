from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PartnerCostCostTypeEnum(str, Enum):
    PARTNER_COST_TYPE_UNSPECIFIED = "PARTNER_COST_TYPE_UNSPECIFIED"
    PARTNER_COST_TYPE_ADLOOX = "PARTNER_COST_TYPE_ADLOOX"
    PARTNER_COST_TYPE_ADLOOX_PREBID = "PARTNER_COST_TYPE_ADLOOX_PREBID"
    PARTNER_COST_TYPE_ADSAFE = "PARTNER_COST_TYPE_ADSAFE"
    PARTNER_COST_TYPE_ADXPOSE = "PARTNER_COST_TYPE_ADXPOSE"
    PARTNER_COST_TYPE_AGGREGATE_KNOWLEDGE = "PARTNER_COST_TYPE_AGGREGATE_KNOWLEDGE"
    PARTNER_COST_TYPE_AGENCY_TRADING_DESK = "PARTNER_COST_TYPE_AGENCY_TRADING_DESK"
    PARTNER_COST_TYPE_DV360_FEE = "PARTNER_COST_TYPE_DV360_FEE"
    PARTNER_COST_TYPE_COMSCORE_VCE = "PARTNER_COST_TYPE_COMSCORE_VCE"
    PARTNER_COST_TYPE_DATA_MANAGEMENT_PLATFORM = "PARTNER_COST_TYPE_DATA_MANAGEMENT_PLATFORM"
    PARTNER_COST_TYPE_DEFAULT = "PARTNER_COST_TYPE_DEFAULT"
    PARTNER_COST_TYPE_DOUBLE_VERIFY = "PARTNER_COST_TYPE_DOUBLE_VERIFY"
    PARTNER_COST_TYPE_DOUBLE_VERIFY_PREBID = "PARTNER_COST_TYPE_DOUBLE_VERIFY_PREBID"
    PARTNER_COST_TYPE_EVIDON = "PARTNER_COST_TYPE_EVIDON"
    PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO = "PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO"
    PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_PREBID = "PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_PREBID"
    PARTNER_COST_TYPE_MEDIA_COST_DATA = "PARTNER_COST_TYPE_MEDIA_COST_DATA"
    PARTNER_COST_TYPE_MOAT_VIDEO = "PARTNER_COST_TYPE_MOAT_VIDEO"
    PARTNER_COST_TYPE_NIELSEN_DAR = "PARTNER_COST_TYPE_NIELSEN_DAR"
    PARTNER_COST_TYPE_SHOP_LOCAL = "PARTNER_COST_TYPE_SHOP_LOCAL"
    PARTNER_COST_TYPE_TERACENT = "PARTNER_COST_TYPE_TERACENT"
    PARTNER_COST_TYPE_THIRD_PARTY_AD_SERVER = "PARTNER_COST_TYPE_THIRD_PARTY_AD_SERVER"
    PARTNER_COST_TYPE_TRUST_METRICS = "PARTNER_COST_TYPE_TRUST_METRICS"
    PARTNER_COST_TYPE_VIZU = "PARTNER_COST_TYPE_VIZU"
    PARTNER_COST_TYPE_ADLINGO_FEE = "PARTNER_COST_TYPE_ADLINGO_FEE"
    PARTNER_COST_TYPE_CUSTOM_FEE_1 = "PARTNER_COST_TYPE_CUSTOM_FEE_1"
    PARTNER_COST_TYPE_CUSTOM_FEE_2 = "PARTNER_COST_TYPE_CUSTOM_FEE_2"
    PARTNER_COST_TYPE_CUSTOM_FEE_3 = "PARTNER_COST_TYPE_CUSTOM_FEE_3"
    PARTNER_COST_TYPE_CUSTOM_FEE_4 = "PARTNER_COST_TYPE_CUSTOM_FEE_4"
    PARTNER_COST_TYPE_CUSTOM_FEE_5 = "PARTNER_COST_TYPE_CUSTOM_FEE_5"

class PartnerCostFeeTypeEnum(str, Enum):
    PARTNER_COST_FEE_TYPE_UNSPECIFIED = "PARTNER_COST_FEE_TYPE_UNSPECIFIED"
    PARTNER_COST_FEE_TYPE_CPM_FEE = "PARTNER_COST_FEE_TYPE_CPM_FEE"
    PARTNER_COST_FEE_TYPE_MEDIA_FEE = "PARTNER_COST_FEE_TYPE_MEDIA_FEE"

class PartnerCostInvoiceTypeEnum(str, Enum):
    PARTNER_COST_INVOICE_TYPE_UNSPECIFIED = "PARTNER_COST_INVOICE_TYPE_UNSPECIFIED"
    PARTNER_COST_INVOICE_TYPE_DV360 = "PARTNER_COST_INVOICE_TYPE_DV360"
    PARTNER_COST_INVOICE_TYPE_PARTNER = "PARTNER_COST_INVOICE_TYPE_PARTNER"


@dataclass_json
@dataclass
class PartnerCost:
    r"""PartnerCost
    Settings that control a partner cost. A partner cost is any type of expense involved in running a campaign, other than the costs of purchasing impressions (which is called the media cost) and using third-party audience segment data (data fee). Some examples of partner costs include the fees for using DV360, a third-party ad server, or a third-party ad serving verification service.
    """
    
    cost_type: Optional[PartnerCostCostTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costType') }})
    fee_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feeAmount') }})
    fee_percentage_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feePercentageMillis') }})
    fee_type: Optional[PartnerCostFeeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feeType') }})
    invoice_type: Optional[PartnerCostInvoiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceType') }})
    
