import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CourseWork } from "./coursework";


// ListCourseWorkResponse
/** 
 * Response when listing course work.
**/
export class ListCourseWorkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=courseWork", elemType: shared.CourseWork })
  courseWork?: CourseWork[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
