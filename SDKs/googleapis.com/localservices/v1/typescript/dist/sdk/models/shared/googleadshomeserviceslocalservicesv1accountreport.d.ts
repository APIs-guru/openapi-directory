import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsHomeservicesLocalservicesV1AggregatorInfo } from "./googleadshomeserviceslocalservicesv1aggregatorinfo";
/**
 * An Account Report of a GLS account identified by their account id containing aggregate data gathered from a particular date range. Next ID: 18
**/
export declare class GoogleAdsHomeservicesLocalservicesV1AccountReport extends SpeakeasyBase {
    accountId?: string;
    aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo;
    averageFiveStarRating?: number;
    averageWeeklyBudget?: number;
    businessName?: string;
    currencyCode?: string;
    currentPeriodChargedLeads?: string;
    currentPeriodConnectedPhoneCalls?: string;
    currentPeriodPhoneCalls?: string;
    currentPeriodTotalCost?: number;
    impressionsLastTwoDays?: string;
    phoneLeadResponsiveness?: number;
    previousPeriodChargedLeads?: string;
    previousPeriodConnectedPhoneCalls?: string;
    previousPeriodPhoneCalls?: string;
    previousPeriodTotalCost?: number;
    totalReview?: number;
}
