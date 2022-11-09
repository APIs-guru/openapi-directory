import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAdsHomeservicesLocalservicesV1AggregatorInfo } from "./googleadshomeserviceslocalservicesv1aggregatorinfo";
import { GoogleAdsHomeservicesLocalservicesV1BookingLead } from "./googleadshomeserviceslocalservicesv1bookinglead";
import { GoogleAdsHomeservicesLocalservicesV1MessageLead } from "./googleadshomeserviceslocalservicesv1messagelead";
import { GoogleAdsHomeservicesLocalservicesV1PhoneLead } from "./googleadshomeserviceslocalservicesv1phonelead";
import { GoogleTypeTimeZone } from "./googletypetimezone";

export enum GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum {
    ChargeStatusUnspecified = "CHARGE_STATUS_UNSPECIFIED"
,    Charged = "CHARGED"
,    NotCharged = "NOT_CHARGED"
}

export enum GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum {
    LeadTypeUnspecified = "LEAD_TYPE_UNSPECIFIED"
,    Message = "MESSAGE"
,    PhoneCall = "PHONE_CALL"
,    Booking = "BOOKING"
}


// GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport
/** 
 * A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data.
**/
export class GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=aggregatorInfo" })
  aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo;

  @Metadata({ data: "json, name=bookingLead" })
  bookingLead?: GoogleAdsHomeservicesLocalservicesV1BookingLead;

  @Metadata({ data: "json, name=businessName" })
  businessName?: string;

  @Metadata({ data: "json, name=chargeStatus" })
  chargeStatus?: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=disputeStatus" })
  disputeStatus?: string;

  @Metadata({ data: "json, name=geo" })
  geo?: string;

  @Metadata({ data: "json, name=leadCategory" })
  leadCategory?: string;

  @Metadata({ data: "json, name=leadCreationTimestamp" })
  leadCreationTimestamp?: string;

  @Metadata({ data: "json, name=leadId" })
  leadId?: string;

  @Metadata({ data: "json, name=leadPrice" })
  leadPrice?: number;

  @Metadata({ data: "json, name=leadType" })
  leadType?: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum;

  @Metadata({ data: "json, name=messageLead" })
  messageLead?: GoogleAdsHomeservicesLocalservicesV1MessageLead;

  @Metadata({ data: "json, name=phoneLead" })
  phoneLead?: GoogleAdsHomeservicesLocalservicesV1PhoneLead;

  @Metadata({ data: "json, name=timezone" })
  timezone?: GoogleTypeTimeZone;
}
