import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PriceInsights
/** 
 * Price Insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. https://support.google.com/merchants/answer/11916926
**/
export class PriceInsights extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=predictedClicksChangeFraction" })
  predictedClicksChangeFraction?: number;

  @SpeakeasyMetadata({ data: "json, name=predictedConversionsChangeFraction" })
  predictedConversionsChangeFraction?: number;

  @SpeakeasyMetadata({ data: "json, name=predictedGrossProfitChangeFraction" })
  predictedGrossProfitChangeFraction?: number;

  @SpeakeasyMetadata({ data: "json, name=predictedImpressionsChangeFraction" })
  predictedImpressionsChangeFraction?: number;

  @SpeakeasyMetadata({ data: "json, name=predictedMonthlyGrossProfitChangeCurrencyCode" })
  predictedMonthlyGrossProfitChangeCurrencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=predictedMonthlyGrossProfitChangeMicros" })
  predictedMonthlyGrossProfitChangeMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestedPriceCurrencyCode" })
  suggestedPriceCurrencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestedPriceMicros" })
  suggestedPriceMicros?: string;
}
