import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak } from "./googlecloudvisionv1p1beta1textannotationdetectedbreak";
import { GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage } from "./googlecloudvisionv1p1beta1textannotationdetectedlanguage";
/**
 * Additional information detected on the structural component.
**/
export declare class GoogleCloudVisionV1p1beta1TextAnnotationTextProperty extends SpeakeasyBase {
    detectedBreak?: GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak;
    detectedLanguages?: GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage[];
}
