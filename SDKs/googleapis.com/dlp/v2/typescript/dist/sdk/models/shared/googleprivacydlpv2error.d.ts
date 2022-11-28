import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * Details information about an error encountered during job execution or the results of an unsuccessful activation of the JobTrigger.
**/
export declare class GooglePrivacyDlpV2Error extends SpeakeasyBase {
    details?: GoogleRpcStatus;
    timestamps?: string[];
}
