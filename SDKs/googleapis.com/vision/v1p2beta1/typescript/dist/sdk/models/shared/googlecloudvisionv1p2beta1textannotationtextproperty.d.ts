import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak } from "./googlecloudvisionv1p2beta1textannotationdetectedbreak";
import { GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage } from "./googlecloudvisionv1p2beta1textannotationdetectedlanguage";
/**
 * Additional information detected on the structural component.
**/
export declare class GoogleCloudVisionV1p2beta1TextAnnotationTextProperty extends SpeakeasyBase {
    detectedBreak?: GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak;
    detectedLanguages?: GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage[];
}
