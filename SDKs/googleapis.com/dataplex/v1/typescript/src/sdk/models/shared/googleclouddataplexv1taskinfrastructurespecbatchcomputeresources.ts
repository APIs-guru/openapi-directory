import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources
/** 
 * Batch compute resources associated with the task.
**/
export class GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=executorsCount" })
  executorsCount?: number;

  @Metadata({ data: "json, name=maxExecutorsCount" })
  maxExecutorsCount?: number;
}
