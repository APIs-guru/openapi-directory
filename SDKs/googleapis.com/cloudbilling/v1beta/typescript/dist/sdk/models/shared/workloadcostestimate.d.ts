import { SpeakeasyBase } from "../../../internal/utils";
import { SkuCostEstimate } from "./skucostestimate";
import { CostEstimate } from "./costestimate";
/**
 * Estimated cost for a workload.
**/
export declare class WorkloadCostEstimate extends SpeakeasyBase {
    name?: string;
    skuCostEstimates?: SkuCostEstimate[];
    workloadTotalCostEstimate?: CostEstimate;
}
