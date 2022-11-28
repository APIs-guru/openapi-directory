import { SpeakeasyBase } from "../../../internal/utils";
import { ApprovalConfig } from "./approvalconfig";
import { ApprovalResultInput } from "./approvalresult";
import { ApprovalResult } from "./approvalresult";
export declare enum BuildApprovalStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED",
    Cancelled = "CANCELLED"
}
/**
 * BuildApproval describes a build's approval configuration, state, and result.
**/
export declare class BuildApprovalInput extends SpeakeasyBase {
    config?: ApprovalConfig;
    result?: ApprovalResultInput;
}
/**
 * BuildApproval describes a build's approval configuration, state, and result.
**/
export declare class BuildApproval extends SpeakeasyBase {
    config?: ApprovalConfig;
    result?: ApprovalResult;
    state?: BuildApprovalStateEnum;
}
