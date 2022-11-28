import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak } from "./googlecloudvisionv1p1beta1textannotationdetectedbreak";
import { GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage } from "./googlecloudvisionv1p1beta1textannotationdetectedlanguage";



// GoogleCloudVisionV1p1beta1TextAnnotationTextProperty
/** 
 * Additional information detected on the structural component.
**/
export class GoogleCloudVisionV1p1beta1TextAnnotationTextProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedBreak" })
  detectedBreak?: GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak;

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage })
  detectedLanguages?: GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage[];
}
