import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CourseAlias } from "./coursealias";



// ListCourseAliasesResponse
/** 
 * Response when listing course aliases.
**/
export class ListCourseAliasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliases", elemType: CourseAlias })
  aliases?: CourseAlias[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
