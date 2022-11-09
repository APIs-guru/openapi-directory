import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1DocumentPageDetectedLanguage
/** 
 * Detected language for a structural component.
**/
export class GoogleCloudDocumentaiV1DocumentPageDetectedLanguage extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
