import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DetectedLanguage
/** 
 * Detected language for a structural component.
**/
export class DetectedLanguage extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
