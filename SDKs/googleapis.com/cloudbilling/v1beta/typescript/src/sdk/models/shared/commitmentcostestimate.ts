import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CostEstimate } from "./costestimate";
import { SkuCostEstimate } from "./skucostestimate";



// CommitmentCostEstimate
/** 
 * Estimated cost for a commitment.
**/
export class CommitmentCostEstimate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitmentTotalCostEstimate" })
  commitmentTotalCostEstimate?: CostEstimate;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=skuCostEstimates", elemType: SkuCostEstimate })
  skuCostEstimates?: SkuCostEstimate[];
}
