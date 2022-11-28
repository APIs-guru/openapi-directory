import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnnotationSource } from "./annotationsource";
import { ImageAnnotation } from "./imageannotation";
import { ResourceAnnotation } from "./resourceannotation";
import { SensitiveTextAnnotation } from "./sensitivetextannotation";



// Annotation
/** 
 * An annotation record.
**/
export class Annotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSource" })
  annotationSource?: AnnotationSource;

  @SpeakeasyMetadata({ data: "json, name=customData" })
  customData?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=imageAnnotation" })
  imageAnnotation?: ImageAnnotation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceAnnotation" })
  resourceAnnotation?: ResourceAnnotation;

  @SpeakeasyMetadata({ data: "json, name=textAnnotation" })
  textAnnotation?: SensitiveTextAnnotation;
}
