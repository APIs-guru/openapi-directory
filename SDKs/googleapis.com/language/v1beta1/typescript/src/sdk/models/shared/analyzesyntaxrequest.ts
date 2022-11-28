import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";


export enum AnalyzeSyntaxRequestEncodingTypeEnum {
    None = "NONE",
    Utf8 = "UTF8",
    Utf16 = "UTF16",
    Utf32 = "UTF32"
}


// AnalyzeSyntaxRequest
/** 
 * The syntax analysis request message.
**/
export class AnalyzeSyntaxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: Document;

  @SpeakeasyMetadata({ data: "json, name=encodingType" })
  encodingType?: AnalyzeSyntaxRequestEncodingTypeEnum;
}
