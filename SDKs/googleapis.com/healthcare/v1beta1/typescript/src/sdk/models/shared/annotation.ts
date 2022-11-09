import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnnotationSource } from "./annotationsource";
import { ImageAnnotation } from "./imageannotation";
import { ResourceAnnotation } from "./resourceannotation";
import { SensitiveTextAnnotation } from "./sensitivetextannotation";


// Annotation
/** 
 * An annotation record.
**/
export class Annotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSource" })
  annotationSource?: AnnotationSource;

  @Metadata({ data: "json, name=customData" })
  customData?: Map<string, string>;

  @Metadata({ data: "json, name=imageAnnotation" })
  imageAnnotation?: ImageAnnotation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceAnnotation" })
  resourceAnnotation?: ResourceAnnotation;

  @Metadata({ data: "json, name=textAnnotation" })
  textAnnotation?: SensitiveTextAnnotation;
}
