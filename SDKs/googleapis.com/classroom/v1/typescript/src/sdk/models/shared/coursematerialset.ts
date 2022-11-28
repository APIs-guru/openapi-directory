import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CourseMaterial } from "./coursematerial";



// CourseMaterialSet
/** 
 * A set of materials that appears on the "About" page of the course. These materials might include a syllabus, schedule, or other background information relating to the course as a whole.
**/
export class CourseMaterialSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=materials", elemType: CourseMaterial })
  materials?: CourseMaterial[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
