import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAdsHomeservicesLocalservicesV1AggregatorInfo } from "./googleadshomeserviceslocalservicesv1aggregatorinfo";
import { GoogleAdsHomeservicesLocalservicesV1BookingLead } from "./googleadshomeserviceslocalservicesv1bookinglead";
import { GoogleAdsHomeservicesLocalservicesV1MessageLead } from "./googleadshomeserviceslocalservicesv1messagelead";
import { GoogleAdsHomeservicesLocalservicesV1PhoneLead } from "./googleadshomeserviceslocalservicesv1phonelead";
import { GoogleTypeTimeZone } from "./googletypetimezone";
export declare enum GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum {
    ChargeStatusUnspecified = "CHARGE_STATUS_UNSPECIFIED",
    Charged = "CHARGED",
    NotCharged = "NOT_CHARGED"
}
export declare enum GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum {
    LeadTypeUnspecified = "LEAD_TYPE_UNSPECIFIED",
    Message = "MESSAGE",
    PhoneCall = "PHONE_CALL",
    Booking = "BOOKING"
}
/**
 * A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data.
**/
export declare class GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport extends SpeakeasyBase {
    accountId?: string;
    aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo;
    bookingLead?: GoogleAdsHomeservicesLocalservicesV1BookingLead;
    businessName?: string;
    chargeStatus?: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum;
    currencyCode?: string;
    disputeStatus?: string;
    geo?: string;
    leadCategory?: string;
    leadCreationTimestamp?: string;
    leadId?: string;
    leadPrice?: number;
    leadType?: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum;
    messageLead?: GoogleAdsHomeservicesLocalservicesV1MessageLead;
    phoneLead?: GoogleAdsHomeservicesLocalservicesV1PhoneLead;
    timezone?: GoogleTypeTimeZone;
}
