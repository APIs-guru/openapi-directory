import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Document } from "./document";

export enum AnalyzeSentimentRequestEncodingTypeEnum {
    None = "NONE"
,    Utf8 = "UTF8"
,    Utf16 = "UTF16"
,    Utf32 = "UTF32"
}


// AnalyzeSentimentRequest
/** 
 * The sentiment analysis request message.
**/
export class AnalyzeSentimentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=document" })
  document?: Document;

  @Metadata({ data: "json, name=encodingType" })
  encodingType?: AnalyzeSentimentRequestEncodingTypeEnum;
}
