import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TierRate } from "./tierrate";


// PricingExpression
/** 
 * Expresses a mathematical pricing formula. For Example:- `usage_unit: GBy` `tiered_rates:` `[start_usage_amount: 20, unit_price: $10]` `[start_usage_amount: 100, unit_price: $5]` The above expresses a pricing formula where the first 20GB is free, the next 80GB is priced at $10 per GB followed by $5 per GB for additional usage.
**/
export class PricingExpression extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseUnit" })
  baseUnit?: string;

  @Metadata({ data: "json, name=baseUnitConversionFactor" })
  baseUnitConversionFactor?: number;

  @Metadata({ data: "json, name=baseUnitDescription" })
  baseUnitDescription?: string;

  @Metadata({ data: "json, name=displayQuantity" })
  displayQuantity?: number;

  @Metadata({ data: "json, name=tieredRates", elemType: shared.TierRate })
  tieredRates?: TierRate[];

  @Metadata({ data: "json, name=usageUnit" })
  usageUnit?: string;

  @Metadata({ data: "json, name=usageUnitDescription" })
  usageUnitDescription?: string;
}
