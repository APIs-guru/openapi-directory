import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PriceCompetitiveness
/** 
 * Price Competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`. https://support.google.com/merchants/answer/9626903
**/
export class PriceCompetitiveness extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=benchmarkPriceCurrencyCode" })
  benchmarkPriceCurrencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=benchmarkPriceMicros" })
  benchmarkPriceMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;
}
