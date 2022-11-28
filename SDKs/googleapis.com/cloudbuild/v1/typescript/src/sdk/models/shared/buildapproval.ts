import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApprovalConfig } from "./approvalconfig";
import { ApprovalResultInput } from "./approvalresult";
import { ApprovalResult } from "./approvalresult";


export enum BuildApprovalStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED",
    Cancelled = "CANCELLED"
}


// BuildApprovalInput
/** 
 * BuildApproval describes a build's approval configuration, state, and result.
**/
export class BuildApprovalInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ApprovalConfig;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: ApprovalResultInput;
}


// BuildApproval
/** 
 * BuildApproval describes a build's approval configuration, state, and result.
**/
export class BuildApproval extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ApprovalConfig;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: ApprovalResult;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: BuildApprovalStateEnum;
}
