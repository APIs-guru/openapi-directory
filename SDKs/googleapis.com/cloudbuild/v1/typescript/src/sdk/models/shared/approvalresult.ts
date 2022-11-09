import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApprovalResultDecisionEnum {
    DecisionUnspecified = "DECISION_UNSPECIFIED"
,    Approved = "APPROVED"
,    Rejected = "REJECTED"
}


// ApprovalResult
/** 
 * ApprovalResult describes the decision and associated metadata of a manual approval of a build.
**/
export class ApprovalResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalTime" })
  approvalTime?: string;

  @Metadata({ data: "json, name=approverAccount" })
  approverAccount?: string;

  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=decision" })
  decision?: ApprovalResultDecisionEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
