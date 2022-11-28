import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudentSubmission } from "./studentsubmission";



// ListStudentSubmissionsResponse
/** 
 * Response when listing student submissions.
**/
export class ListStudentSubmissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=studentSubmissions", elemType: StudentSubmission })
  studentSubmissions?: StudentSubmission[];
}
