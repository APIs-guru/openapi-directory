import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApprovalConfig
/** 
 * ApprovalConfig describes configuration for manual approval of a build.
**/
export class ApprovalConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalRequired" })
  approvalRequired?: boolean;
}
