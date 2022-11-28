import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudHealthcareSource } from "./cloudhealthcaresource";



// AnnotationSource
/** 
 * AnnotationSource holds the source information of the annotation.
**/
export class AnnotationSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudHealthcareSource" })
  cloudHealthcareSource?: CloudHealthcareSource;
}
