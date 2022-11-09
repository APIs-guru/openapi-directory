import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregationInfo } from "./aggregationinfo";
import { PricingExpression } from "./pricingexpression";


// PricingInfo
/** 
 * Represents the pricing information for a SKU at a single point of time.
**/
export class PricingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationInfo" })
  aggregationInfo?: AggregationInfo;

  @Metadata({ data: "json, name=currencyConversionRate" })
  currencyConversionRate?: number;

  @Metadata({ data: "json, name=effectiveTime" })
  effectiveTime?: string;

  @Metadata({ data: "json, name=pricingExpression" })
  pricingExpression?: PricingExpression;

  @Metadata({ data: "json, name=summary" })
  summary?: string;
}
