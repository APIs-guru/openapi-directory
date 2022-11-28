import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1DocumentPageDetectedLanguage
/** 
 * Detected language for a structural component.
**/
export class GoogleCloudDocumentaiV1DocumentPageDetectedLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
