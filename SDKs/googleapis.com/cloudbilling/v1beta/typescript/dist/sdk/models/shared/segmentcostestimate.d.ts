import { SpeakeasyBase } from "../../../internal/utils";
import { CommitmentCostEstimate } from "./commitmentcostestimate";
import { EstimationTimePoint } from "./estimationtimepoint";
import { CostEstimate } from "./costestimate";
import { WorkloadCostEstimate } from "./workloadcostestimate";
/**
 * Workload cost estimates for a single time segment.
**/
export declare class SegmentCostEstimate extends SpeakeasyBase {
    commitmentCostEstimates?: CommitmentCostEstimate[];
    segmentStartTime?: EstimationTimePoint;
    segmentTotalCostEstimate?: CostEstimate;
    workloadCostEstimates?: WorkloadCostEstimate[];
}
