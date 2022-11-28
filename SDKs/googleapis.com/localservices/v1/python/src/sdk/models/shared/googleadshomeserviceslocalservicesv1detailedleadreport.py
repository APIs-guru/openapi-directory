from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum(str, Enum):
    CHARGE_STATUS_UNSPECIFIED = "CHARGE_STATUS_UNSPECIFIED"
    CHARGED = "CHARGED"
    NOT_CHARGED = "NOT_CHARGED"

class GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum(str, Enum):
    LEAD_TYPE_UNSPECIFIED = "LEAD_TYPE_UNSPECIFIED"
    MESSAGE = "MESSAGE"
    PHONE_CALL = "PHONE_CALL"
    BOOKING = "BOOKING"


@dataclass_json
@dataclass
class GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport:
    r"""GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport
    A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    aggregator_info: Optional[GoogleAdsHomeservicesLocalservicesV1AggregatorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregatorInfo') }})
    booking_lead: Optional[GoogleAdsHomeservicesLocalservicesV1BookingLead] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingLead') }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessName') }})
    charge_status: Optional[GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeStatus') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    dispute_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disputeStatus') }})
    geo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geo') }})
    lead_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leadCategory') }})
    lead_creation_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leadCreationTimestamp') }})
    lead_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leadId') }})
    lead_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leadPrice') }})
    lead_type: Optional[GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leadType') }})
    message_lead: Optional[GoogleAdsHomeservicesLocalservicesV1MessageLead] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageLead') }})
    phone_lead: Optional[GoogleAdsHomeservicesLocalservicesV1PhoneLead] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneLead') }})
    timezone: Optional[GoogleTypeTimeZone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    
