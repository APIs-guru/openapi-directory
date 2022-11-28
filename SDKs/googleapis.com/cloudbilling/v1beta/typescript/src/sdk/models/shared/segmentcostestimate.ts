import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommitmentCostEstimate } from "./commitmentcostestimate";
import { EstimationTimePoint } from "./estimationtimepoint";
import { CostEstimate } from "./costestimate";
import { WorkloadCostEstimate } from "./workloadcostestimate";



// SegmentCostEstimate
/** 
 * Workload cost estimates for a single time segment.
**/
export class SegmentCostEstimate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitmentCostEstimates", elemType: CommitmentCostEstimate })
  commitmentCostEstimates?: CommitmentCostEstimate[];

  @SpeakeasyMetadata({ data: "json, name=segmentStartTime" })
  segmentStartTime?: EstimationTimePoint;

  @SpeakeasyMetadata({ data: "json, name=segmentTotalCostEstimate" })
  segmentTotalCostEstimate?: CostEstimate;

  @SpeakeasyMetadata({ data: "json, name=workloadCostEstimates", elemType: WorkloadCostEstimate })
  workloadCostEstimates?: WorkloadCostEstimate[];
}
