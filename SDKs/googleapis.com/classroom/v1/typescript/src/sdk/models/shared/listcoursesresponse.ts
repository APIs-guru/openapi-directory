import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Course } from "./course";


// ListCoursesResponse
/** 
 * Response when listing courses.
**/
export class ListCoursesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=courses", elemType: shared.Course })
  courses?: Course[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
