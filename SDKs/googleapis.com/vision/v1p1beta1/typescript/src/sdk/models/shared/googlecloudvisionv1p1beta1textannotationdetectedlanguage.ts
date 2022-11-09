import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage
/** 
 * Detected language for a structural component.
**/
export class GoogleCloudVisionV1p1beta1TextAnnotationDetectedLanguage extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
