import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Course } from "./course";



// ListCoursesResponse
/** 
 * Response when listing courses.
**/
export class ListCoursesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=courses", elemType: Course })
  courses?: Course[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
