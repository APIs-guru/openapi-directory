import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetectedLanguage
/** 
 * Detected language for a structural component.
**/
export class DetectedLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
