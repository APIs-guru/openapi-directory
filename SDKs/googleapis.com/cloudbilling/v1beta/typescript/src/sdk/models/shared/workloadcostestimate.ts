import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SkuCostEstimate } from "./skucostestimate";
import { CostEstimate } from "./costestimate";


// WorkloadCostEstimate
/** 
 * Estimated cost for a workload.
**/
export class WorkloadCostEstimate extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=skuCostEstimates", elemType: shared.SkuCostEstimate })
  skuCostEstimates?: SkuCostEstimate[];

  @Metadata({ data: "json, name=workloadTotalCostEstimate" })
  workloadTotalCostEstimate?: CostEstimate;
}
