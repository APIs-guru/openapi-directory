import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage
/** 
 * Detected language for a structural component.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
