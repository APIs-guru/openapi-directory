import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotationSource } from "./annotationsource";
import { ImageAnnotation } from "./imageannotation";
import { ResourceAnnotation } from "./resourceannotation";
import { SensitiveTextAnnotation } from "./sensitivetextannotation";
/**
 * An annotation record.
**/
export declare class Annotation extends SpeakeasyBase {
    annotationSource?: AnnotationSource;
    customData?: Map<string, string>;
    imageAnnotation?: ImageAnnotation;
    name?: string;
    resourceAnnotation?: ResourceAnnotation;
    textAnnotation?: SensitiveTextAnnotation;
}
