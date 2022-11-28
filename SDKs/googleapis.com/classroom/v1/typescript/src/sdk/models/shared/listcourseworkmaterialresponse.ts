import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CourseWorkMaterial } from "./courseworkmaterial";



// ListCourseWorkMaterialResponse
/** 
 * Response when listing course work material.
**/
export class ListCourseWorkMaterialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=courseWorkMaterial", elemType: CourseWorkMaterial })
  courseWorkMaterial?: CourseWorkMaterial[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
