import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetectedLanguage
/** 
 * The response message for language detection.
**/
export class DetectedLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
