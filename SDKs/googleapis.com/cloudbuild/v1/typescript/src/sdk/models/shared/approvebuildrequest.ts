import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApprovalResultInput } from "./approvalresult";



// ApproveBuildRequestInput
/** 
 * Request to approve or reject a pending build.
**/
export class ApproveBuildRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalResult" })
  approvalResult?: ApprovalResultInput;
}
