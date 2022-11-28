import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage
/** 
 * Detected language for a structural component.
**/
export class GoogleCloudVisionV1p2beta1TextAnnotationDetectedLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
