import { SpeakeasyBase } from "../../../internal/utils";
import { ApprovalResultInput } from "./approvalresult";
/**
 * Request to approve or reject a pending build.
**/
export declare class ApproveBuildRequestInput extends SpeakeasyBase {
    approvalResult?: ApprovalResultInput;
}
