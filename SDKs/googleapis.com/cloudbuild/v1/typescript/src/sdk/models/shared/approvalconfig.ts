import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApprovalConfig
/** 
 * ApprovalConfig describes configuration for manual approval of a build.
**/
export class ApprovalConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalRequired" })
  approvalRequired?: boolean;
}
