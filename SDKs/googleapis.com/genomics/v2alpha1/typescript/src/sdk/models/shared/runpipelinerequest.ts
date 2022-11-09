import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Pipeline } from "./pipeline";


// RunPipelineRequest
/** 
 * The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Genomics service account or the request will fail.
**/
export class RunPipelineRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=pipeline" })
  pipeline?: Pipeline;

  @Metadata({ data: "json, name=pubSubTopic" })
  pubSubTopic?: string;
}
