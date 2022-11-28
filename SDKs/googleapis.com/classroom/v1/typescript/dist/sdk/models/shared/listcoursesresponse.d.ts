import { SpeakeasyBase } from "../../../internal/utils";
import { Course } from "./course";
/**
 * Response when listing courses.
**/
export declare class ListCoursesResponse extends SpeakeasyBase {
    courses?: Course[];
    nextPageToken?: string;
}
