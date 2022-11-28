import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsHomeservicesLocalservicesV1AggregatorInfo } from "./googleadshomeserviceslocalservicesv1aggregatorinfo";
import { GoogleAdsHomeservicesLocalservicesV1BookingLead } from "./googleadshomeserviceslocalservicesv1bookinglead";
import { GoogleAdsHomeservicesLocalservicesV1MessageLead } from "./googleadshomeserviceslocalservicesv1messagelead";
import { GoogleAdsHomeservicesLocalservicesV1PhoneLead } from "./googleadshomeserviceslocalservicesv1phonelead";
import { GoogleTypeTimeZone } from "./googletypetimezone";


export enum GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum {
    ChargeStatusUnspecified = "CHARGE_STATUS_UNSPECIFIED",
    Charged = "CHARGED",
    NotCharged = "NOT_CHARGED"
}

export enum GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum {
    LeadTypeUnspecified = "LEAD_TYPE_UNSPECIFIED",
    Message = "MESSAGE",
    PhoneCall = "PHONE_CALL",
    Booking = "BOOKING"
}


// GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport
/** 
 * A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data.
**/
export class GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=aggregatorInfo" })
  aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo;

  @SpeakeasyMetadata({ data: "json, name=bookingLead" })
  bookingLead?: GoogleAdsHomeservicesLocalservicesV1BookingLead;

  @SpeakeasyMetadata({ data: "json, name=businessName" })
  businessName?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeStatus" })
  chargeStatus?: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=disputeStatus" })
  disputeStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=geo" })
  geo?: string;

  @SpeakeasyMetadata({ data: "json, name=leadCategory" })
  leadCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=leadCreationTimestamp" })
  leadCreationTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=leadId" })
  leadId?: string;

  @SpeakeasyMetadata({ data: "json, name=leadPrice" })
  leadPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=leadType" })
  leadType?: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=messageLead" })
  messageLead?: GoogleAdsHomeservicesLocalservicesV1MessageLead;

  @SpeakeasyMetadata({ data: "json, name=phoneLead" })
  phoneLead?: GoogleAdsHomeservicesLocalservicesV1PhoneLead;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: GoogleTypeTimeZone;
}
