import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApprovalResultDecisionEnum {
    DecisionUnspecified = "DECISION_UNSPECIFIED",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}


// ApprovalResult
/** 
 * ApprovalResult describes the decision and associated metadata of a manual approval of a build.
**/
export class ApprovalResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalTime" })
  approvalTime?: string;

  @SpeakeasyMetadata({ data: "json, name=approverAccount" })
  approverAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=decision" })
  decision?: ApprovalResultDecisionEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// ApprovalResultInput
/** 
 * ApprovalResult describes the decision and associated metadata of a manual approval of a build.
**/
export class ApprovalResultInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=decision" })
  decision?: ApprovalResultDecisionEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
