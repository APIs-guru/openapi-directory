import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApprovalConfig } from "./approvalconfig";
import { ApprovalResult } from "./approvalresult";

export enum BuildApprovalStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Approved = "APPROVED"
,    Rejected = "REJECTED"
,    Cancelled = "CANCELLED"
}


// BuildApproval
/** 
 * BuildApproval describes a build's approval configuration, state, and result.
**/
export class BuildApproval extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: ApprovalConfig;

  @Metadata({ data: "json, name=result" })
  result?: ApprovalResult;

  @Metadata({ data: "json, name=state" })
  state?: BuildApprovalStateEnum;
}
