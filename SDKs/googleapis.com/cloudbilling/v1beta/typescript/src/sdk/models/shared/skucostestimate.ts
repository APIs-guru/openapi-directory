import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CostEstimate } from "./costestimate";


// SkuCostEstimate
/** 
 * Estimated cost for usage on a SKU.
**/
export class SkuCostEstimate extends SpeakeasyBase {
  @Metadata({ data: "json, name=costEstimate" })
  costEstimate?: CostEstimate;

  @Metadata({ data: "json, name=sku" })
  sku?: string;

  @Metadata({ data: "json, name=usageAmount" })
  usageAmount?: number;

  @Metadata({ data: "json, name=usageUnit" })
  usageUnit?: string;
}
