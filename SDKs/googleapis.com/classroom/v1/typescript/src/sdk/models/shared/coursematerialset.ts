import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CourseMaterial } from "./coursematerial";


// CourseMaterialSet
/** 
 * A set of materials that appears on the "About" page of the course. These materials might include a syllabus, schedule, or other background information relating to the course as a whole.
**/
export class CourseMaterialSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=materials", elemType: shared.CourseMaterial })
  materials?: CourseMaterial[];

  @Metadata({ data: "json, name=title" })
  title?: string;
}
