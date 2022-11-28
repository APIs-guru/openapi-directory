import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SkuCostEstimate } from "./skucostestimate";
import { CostEstimate } from "./costestimate";



// WorkloadCostEstimate
/** 
 * Estimated cost for a workload.
**/
export class WorkloadCostEstimate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=skuCostEstimates", elemType: SkuCostEstimate })
  skuCostEstimates?: SkuCostEstimate[];

  @SpeakeasyMetadata({ data: "json, name=workloadTotalCostEstimate" })
  workloadTotalCostEstimate?: CostEstimate;
}
