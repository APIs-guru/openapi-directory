import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak } from "./googlecloudvisionv1p2beta1textannotationdetectedbreak";
import { GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage } from "./googlecloudvisionv1p2beta1textannotationdetectedlanguage";



// GoogleCloudVisionV1p2beta1TextAnnotationTextProperty
/** 
 * Additional information detected on the structural component.
**/
export class GoogleCloudVisionV1p2beta1TextAnnotationTextProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedBreak" })
  detectedBreak?: GoogleCloudVisionV1p2beta1TextAnnotationDetectedBreak;

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages", elemType: GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage })
  detectedLanguages?: GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage[];
}
