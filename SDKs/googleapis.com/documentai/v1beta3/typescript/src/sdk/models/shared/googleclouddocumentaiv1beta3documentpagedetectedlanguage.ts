import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage
/** 
 * Detected language for a structural component.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
