import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * Records a failed evaluation job run.
**/
export declare class GoogleCloudDatalabelingV1beta1Attempt extends SpeakeasyBase {
    attemptTime?: string;
    partialFailures?: GoogleRpcStatus[];
}
