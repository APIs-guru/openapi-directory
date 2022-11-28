import { SpeakeasyBase } from "../../../internal/utils";
import { CourseWorkMaterial } from "./courseworkmaterial";
/**
 * Response when listing course work material.
**/
export declare class ListCourseWorkMaterialResponse extends SpeakeasyBase {
    courseWorkMaterial?: CourseWorkMaterial[];
    nextPageToken?: string;
}
