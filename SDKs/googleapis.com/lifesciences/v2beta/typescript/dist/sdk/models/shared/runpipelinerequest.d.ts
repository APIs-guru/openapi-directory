import { SpeakeasyBase } from "../../../internal/utils";
import { Pipeline } from "./pipeline";
/**
 * The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Life Sciences service account or the request will fail.
**/
export declare class RunPipelineRequest extends SpeakeasyBase {
    labels?: Map<string, string>;
    pipeline?: Pipeline;
    pubSubTopic?: string;
}
