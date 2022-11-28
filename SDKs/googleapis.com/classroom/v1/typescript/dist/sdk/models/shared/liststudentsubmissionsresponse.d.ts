import { SpeakeasyBase } from "../../../internal/utils";
import { StudentSubmission } from "./studentsubmission";
/**
 * Response when listing student submissions.
**/
export declare class ListStudentSubmissionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    studentSubmissions?: StudentSubmission[];
}
