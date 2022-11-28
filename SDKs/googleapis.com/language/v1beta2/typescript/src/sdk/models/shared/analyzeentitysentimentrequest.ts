import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";


export enum AnalyzeEntitySentimentRequestEncodingTypeEnum {
    None = "NONE",
    Utf8 = "UTF8",
    Utf16 = "UTF16",
    Utf32 = "UTF32"
}


// AnalyzeEntitySentimentRequest
/** 
 * The entity-level sentiment analysis request message.
**/
export class AnalyzeEntitySentimentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: Document;

  @SpeakeasyMetadata({ data: "json, name=encodingType" })
  encodingType?: AnalyzeEntitySentimentRequestEncodingTypeEnum;
}
