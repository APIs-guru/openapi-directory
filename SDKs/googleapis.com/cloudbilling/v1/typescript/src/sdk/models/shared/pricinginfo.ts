import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregationInfo } from "./aggregationinfo";
import { PricingExpression } from "./pricingexpression";



// PricingInfo
/** 
 * Represents the pricing information for a SKU at a single point of time.
**/
export class PricingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationInfo" })
  aggregationInfo?: AggregationInfo;

  @SpeakeasyMetadata({ data: "json, name=currencyConversionRate" })
  currencyConversionRate?: number;

  @SpeakeasyMetadata({ data: "json, name=effectiveTime" })
  effectiveTime?: string;

  @SpeakeasyMetadata({ data: "json, name=pricingExpression" })
  pricingExpression?: PricingExpression;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;
}
