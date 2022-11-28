import { SpeakeasyBase } from "../../../internal/utils";
import { CourseAlias } from "./coursealias";
/**
 * Response when listing course aliases.
**/
export declare class ListCourseAliasesResponse extends SpeakeasyBase {
    aliases?: CourseAlias[];
    nextPageToken?: string;
}
