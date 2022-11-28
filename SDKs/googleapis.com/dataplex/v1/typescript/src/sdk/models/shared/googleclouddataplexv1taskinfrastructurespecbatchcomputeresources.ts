import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources
/** 
 * Batch compute resources associated with the task.
**/
export class GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executorsCount" })
  executorsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=maxExecutorsCount" })
  maxExecutorsCount?: number;
}
