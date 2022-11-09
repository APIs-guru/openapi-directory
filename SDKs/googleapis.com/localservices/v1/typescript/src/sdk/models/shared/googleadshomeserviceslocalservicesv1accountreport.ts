import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAdsHomeservicesLocalservicesV1AggregatorInfo } from "./googleadshomeserviceslocalservicesv1aggregatorinfo";


// GoogleAdsHomeservicesLocalservicesV1AccountReport
/** 
 * An Account Report of a GLS account identified by their account id containing aggregate data gathered from a particular date range. Next ID: 18
**/
export class GoogleAdsHomeservicesLocalservicesV1AccountReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=aggregatorInfo" })
  aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo;

  @Metadata({ data: "json, name=averageFiveStarRating" })
  averageFiveStarRating?: number;

  @Metadata({ data: "json, name=averageWeeklyBudget" })
  averageWeeklyBudget?: number;

  @Metadata({ data: "json, name=businessName" })
  businessName?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=currentPeriodChargedLeads" })
  currentPeriodChargedLeads?: string;

  @Metadata({ data: "json, name=currentPeriodConnectedPhoneCalls" })
  currentPeriodConnectedPhoneCalls?: string;

  @Metadata({ data: "json, name=currentPeriodPhoneCalls" })
  currentPeriodPhoneCalls?: string;

  @Metadata({ data: "json, name=currentPeriodTotalCost" })
  currentPeriodTotalCost?: number;

  @Metadata({ data: "json, name=impressionsLastTwoDays" })
  impressionsLastTwoDays?: string;

  @Metadata({ data: "json, name=phoneLeadResponsiveness" })
  phoneLeadResponsiveness?: number;

  @Metadata({ data: "json, name=previousPeriodChargedLeads" })
  previousPeriodChargedLeads?: string;

  @Metadata({ data: "json, name=previousPeriodConnectedPhoneCalls" })
  previousPeriodConnectedPhoneCalls?: string;

  @Metadata({ data: "json, name=previousPeriodPhoneCalls" })
  previousPeriodPhoneCalls?: string;

  @Metadata({ data: "json, name=previousPeriodTotalCost" })
  previousPeriodTotalCost?: number;

  @Metadata({ data: "json, name=totalReview" })
  totalReview?: number;
}
