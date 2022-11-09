import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StudentSubmission } from "./studentsubmission";


// ListStudentSubmissionsResponse
/** 
 * Response when listing student submissions.
**/
export class ListStudentSubmissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=studentSubmissions", elemType: shared.StudentSubmission })
  studentSubmissions?: StudentSubmission[];
}
