import { SpeakeasyBase } from "../../../internal/utils";
import { CourseWork } from "./coursework";
/**
 * Response when listing course work.
**/
export declare class ListCourseWorkResponse extends SpeakeasyBase {
    courseWork?: CourseWork[];
    nextPageToken?: string;
}
