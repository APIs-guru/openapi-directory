import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentTranslation
/** 
 * A translated document message.
**/
export class DocumentTranslation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=byteStreamOutputs" })
  byteStreamOutputs?: string[];

  @SpeakeasyMetadata({ data: "json, name=detectedLanguageCode" })
  detectedLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
