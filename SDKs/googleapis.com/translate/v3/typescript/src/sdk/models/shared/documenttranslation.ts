import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentTranslation
/** 
 * A translated document message.
**/
export class DocumentTranslation extends SpeakeasyBase {
  @Metadata({ data: "json, name=byteStreamOutputs" })
  byteStreamOutputs?: string[];

  @Metadata({ data: "json, name=detectedLanguageCode" })
  detectedLanguageCode?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
