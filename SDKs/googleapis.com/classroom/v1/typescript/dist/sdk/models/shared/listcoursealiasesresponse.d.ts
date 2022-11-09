import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CourseAlias } from "./coursealias";
/**
 * Response when listing course aliases.
**/
export declare class ListCourseAliasesResponse extends SpeakeasyBase {
    aliases?: CourseAlias[];
    nextPageToken?: string;
}
