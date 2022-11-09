import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudHealthcareSource } from "./cloudhealthcaresource";


// AnnotationSource
/** 
 * AnnotationSource holds the source information of the annotation.
**/
export class AnnotationSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudHealthcareSource" })
  cloudHealthcareSource?: CloudHealthcareSource;
}
