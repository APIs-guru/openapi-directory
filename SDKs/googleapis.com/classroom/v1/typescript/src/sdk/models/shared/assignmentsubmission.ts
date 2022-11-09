import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attachment } from "./attachment";


// AssignmentSubmission
/** 
 * Student work for an assignment.
**/
export class AssignmentSubmission extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachments", elemType: shared.Attachment })
  attachments?: Attachment[];
}
