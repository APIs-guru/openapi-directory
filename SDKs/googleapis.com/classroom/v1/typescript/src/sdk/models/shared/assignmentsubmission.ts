import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";



// AssignmentSubmission
/** 
 * Student work for an assignment.
**/
export class AssignmentSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: Attachment })
  attachments?: Attachment[];
}
