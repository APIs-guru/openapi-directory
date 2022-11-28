import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApprovalResultDecisionEnum {
    DecisionUnspecified = "DECISION_UNSPECIFIED",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}
/**
 * ApprovalResult describes the decision and associated metadata of a manual approval of a build.
**/
export declare class ApprovalResult extends SpeakeasyBase {
    approvalTime?: string;
    approverAccount?: string;
    comment?: string;
    decision?: ApprovalResultDecisionEnum;
    url?: string;
}
/**
 * ApprovalResult describes the decision and associated metadata of a manual approval of a build.
**/
export declare class ApprovalResultInput extends SpeakeasyBase {
    comment?: string;
    decision?: ApprovalResultDecisionEnum;
    url?: string;
}
