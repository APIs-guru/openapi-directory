import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CostEstimate } from "./costestimate";



// SkuCostEstimate
/** 
 * Estimated cost for usage on a SKU.
**/
export class SkuCostEstimate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costEstimate" })
  costEstimate?: CostEstimate;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=usageAmount" })
  usageAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=usageUnit" })
  usageUnit?: string;
}
