import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CourseWorkMaterial } from "./courseworkmaterial";


// ListCourseWorkMaterialResponse
/** 
 * Response when listing course work material.
**/
export class ListCourseWorkMaterialResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=courseWorkMaterial", elemType: shared.CourseWorkMaterial })
  courseWorkMaterial?: CourseWorkMaterial[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
