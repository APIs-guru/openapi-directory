import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TierRate } from "./tierrate";
/**
 * Expresses a mathematical pricing formula. For Example:- `usage_unit: GBy` `tiered_rates:` `[start_usage_amount: 20, unit_price: $10]` `[start_usage_amount: 100, unit_price: $5]` The above expresses a pricing formula where the first 20GB is free, the next 80GB is priced at $10 per GB followed by $5 per GB for additional usage.
**/
export declare class PricingExpression extends SpeakeasyBase {
    baseUnit?: string;
    baseUnitConversionFactor?: number;
    baseUnitDescription?: string;
    displayQuantity?: number;
    tieredRates?: TierRate[];
    usageUnit?: string;
    usageUnitDescription?: string;
}
