import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApprovalResult } from "./approvalresult";


// ApproveBuildRequest
/** 
 * Request to approve or reject a pending build.
**/
export class ApproveBuildRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalResult" })
  approvalResult?: ApprovalResult;
}
