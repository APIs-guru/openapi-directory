import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Price Competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`. https://support.google.com/merchants/answer/9626903
**/
export declare class PriceCompetitiveness extends SpeakeasyBase {
    benchmarkPriceCurrencyCode?: string;
    benchmarkPriceMicros?: string;
    countryCode?: string;
}
