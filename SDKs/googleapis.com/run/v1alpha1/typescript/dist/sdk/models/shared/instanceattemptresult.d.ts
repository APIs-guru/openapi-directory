import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * Result of an instance attempt.
**/
export declare class InstanceAttemptResult extends SpeakeasyBase {
    exitCode?: number;
    status?: GoogleRpcStatus;
}
