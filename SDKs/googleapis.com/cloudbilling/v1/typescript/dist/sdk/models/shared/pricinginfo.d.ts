import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationInfo } from "./aggregationinfo";
import { PricingExpression } from "./pricingexpression";
/**
 * Represents the pricing information for a SKU at a single point of time.
**/
export declare class PricingInfo extends SpeakeasyBase {
    aggregationInfo?: AggregationInfo;
    currencyConversionRate?: number;
    effectiveTime?: string;
    pricingExpression?: PricingExpression;
    summary?: string;
}
