import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CourseWorkMaterial } from "./courseworkmaterial";
/**
 * Response when listing course work material.
**/
export declare class ListCourseWorkMaterialResponse extends SpeakeasyBase {
    courseWorkMaterial?: CourseWorkMaterial[];
    nextPageToken?: string;
}
