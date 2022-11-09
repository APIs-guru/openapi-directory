import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Student } from "./student";
/**
 * Response when listing students.
**/
export declare class ListStudentsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    students?: Student[];
}
