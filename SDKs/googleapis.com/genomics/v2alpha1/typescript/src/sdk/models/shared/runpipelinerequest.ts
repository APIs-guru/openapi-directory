import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Pipeline } from "./pipeline";



// RunPipelineRequest
/** 
 * The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Genomics service account or the request will fail.
**/
export class RunPipelineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=pipeline" })
  pipeline?: Pipeline;

  @SpeakeasyMetadata({ data: "json, name=pubSubTopic" })
  pubSubTopic?: string;
}
