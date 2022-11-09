import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CommitmentCostEstimate } from "./commitmentcostestimate";
import { EstimationTimePoint } from "./estimationtimepoint";
import { CostEstimate } from "./costestimate";
import { WorkloadCostEstimate } from "./workloadcostestimate";


// SegmentCostEstimate
/** 
 * Workload cost estimates for a single time segment.
**/
export class SegmentCostEstimate extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitmentCostEstimates", elemType: shared.CommitmentCostEstimate })
  commitmentCostEstimates?: CommitmentCostEstimate[];

  @Metadata({ data: "json, name=segmentStartTime" })
  segmentStartTime?: EstimationTimePoint;

  @Metadata({ data: "json, name=segmentTotalCostEstimate" })
  segmentTotalCostEstimate?: CostEstimate;

  @Metadata({ data: "json, name=workloadCostEstimates", elemType: shared.WorkloadCostEstimate })
  workloadCostEstimates?: WorkloadCostEstimate[];
}
