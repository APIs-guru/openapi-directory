import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CourseWork } from "./coursework";



// ListCourseWorkResponse
/** 
 * Response when listing course work.
**/
export class ListCourseWorkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=courseWork", elemType: CourseWork })
  courseWork?: CourseWork[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
