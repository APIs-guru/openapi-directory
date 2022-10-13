from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleadshomeserviceslocalservicesv1aggregatorinfo
from . import googleadshomeserviceslocalservicesv1bookinglead
from . import googleadshomeserviceslocalservicesv1messagelead
from . import googleadshomeserviceslocalservicesv1phonelead
from . import googletypetimezone

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
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    aggregator_info: Optional[googleadshomeserviceslocalservicesv1aggregatorinfo.GoogleAdsHomeservicesLocalservicesV1AggregatorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregatorInfo' }})
    booking_lead: Optional[googleadshomeserviceslocalservicesv1bookinglead.GoogleAdsHomeservicesLocalservicesV1BookingLead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingLead' }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessName' }})
    charge_status: Optional[GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chargeStatus' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    dispute_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disputeStatus' }})
    geo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geo' }})
    lead_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadCategory' }})
    lead_creation_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadCreationTimestamp' }})
    lead_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadId' }})
    lead_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadPrice' }})
    lead_type: Optional[GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadType' }})
    message_lead: Optional[googleadshomeserviceslocalservicesv1messagelead.GoogleAdsHomeservicesLocalservicesV1MessageLead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageLead' }})
    phone_lead: Optional[googleadshomeserviceslocalservicesv1phonelead.GoogleAdsHomeservicesLocalservicesV1PhoneLead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneLead' }})
    timezone: Optional[googletypetimezone.GoogleTypeTimeZone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    
