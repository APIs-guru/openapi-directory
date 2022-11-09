import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CourseAlias } from "./coursealias";


// ListCourseAliasesResponse
/** 
 * Response when listing course aliases.
**/
export class ListCourseAliasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliases", elemType: shared.CourseAlias })
  aliases?: CourseAlias[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
