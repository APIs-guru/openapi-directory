import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DetectedLanguage
/** 
 * The response message for language detection.
**/
export class DetectedLanguage extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
