import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CostEstimate } from "./costestimate";
import { SkuCostEstimate } from "./skucostestimate";


// CommitmentCostEstimate
/** 
 * Estimated cost for a commitment.
**/
export class CommitmentCostEstimate extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitmentTotalCostEstimate" })
  commitmentTotalCostEstimate?: CostEstimate;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=skuCostEstimates", elemType: shared.SkuCostEstimate })
  skuCostEstimates?: SkuCostEstimate[];
}
