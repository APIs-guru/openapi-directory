import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsHomeservicesLocalservicesV1AggregatorInfo } from "./googleadshomeserviceslocalservicesv1aggregatorinfo";



// GoogleAdsHomeservicesLocalservicesV1AccountReport
/** 
 * An Account Report of a GLS account identified by their account id containing aggregate data gathered from a particular date range. Next ID: 18
**/
export class GoogleAdsHomeservicesLocalservicesV1AccountReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=aggregatorInfo" })
  aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo;

  @SpeakeasyMetadata({ data: "json, name=averageFiveStarRating" })
  averageFiveStarRating?: number;

  @SpeakeasyMetadata({ data: "json, name=averageWeeklyBudget" })
  averageWeeklyBudget?: number;

  @SpeakeasyMetadata({ data: "json, name=businessName" })
  businessName?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=currentPeriodChargedLeads" })
  currentPeriodChargedLeads?: string;

  @SpeakeasyMetadata({ data: "json, name=currentPeriodConnectedPhoneCalls" })
  currentPeriodConnectedPhoneCalls?: string;

  @SpeakeasyMetadata({ data: "json, name=currentPeriodPhoneCalls" })
  currentPeriodPhoneCalls?: string;

  @SpeakeasyMetadata({ data: "json, name=currentPeriodTotalCost" })
  currentPeriodTotalCost?: number;

  @SpeakeasyMetadata({ data: "json, name=impressionsLastTwoDays" })
  impressionsLastTwoDays?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneLeadResponsiveness" })
  phoneLeadResponsiveness?: number;

  @SpeakeasyMetadata({ data: "json, name=previousPeriodChargedLeads" })
  previousPeriodChargedLeads?: string;

  @SpeakeasyMetadata({ data: "json, name=previousPeriodConnectedPhoneCalls" })
  previousPeriodConnectedPhoneCalls?: string;

  @SpeakeasyMetadata({ data: "json, name=previousPeriodPhoneCalls" })
  previousPeriodPhoneCalls?: string;

  @SpeakeasyMetadata({ data: "json, name=previousPeriodTotalCost" })
  previousPeriodTotalCost?: number;

  @SpeakeasyMetadata({ data: "json, name=totalReview" })
  totalReview?: number;
}
