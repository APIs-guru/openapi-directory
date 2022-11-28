import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Price Insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. https://support.google.com/merchants/answer/11916926
**/
export declare class PriceInsights extends SpeakeasyBase {
    predictedClicksChangeFraction?: number;
    predictedConversionsChangeFraction?: number;
    predictedGrossProfitChangeFraction?: number;
    predictedImpressionsChangeFraction?: number;
    predictedMonthlyGrossProfitChangeCurrencyCode?: string;
    predictedMonthlyGrossProfitChangeMicros?: string;
    suggestedPriceCurrencyCode?: string;
    suggestedPriceMicros?: string;
}
