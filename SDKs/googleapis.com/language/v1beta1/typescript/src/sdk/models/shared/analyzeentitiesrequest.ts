import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Document } from "./document";

export enum AnalyzeEntitiesRequestEncodingTypeEnum {
    None = "NONE"
,    Utf8 = "UTF8"
,    Utf16 = "UTF16"
,    Utf32 = "UTF32"
}


// AnalyzeEntitiesRequest
/** 
 * The entity analysis request message.
**/
export class AnalyzeEntitiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=document" })
  document?: Document;

  @Metadata({ data: "json, name=encodingType" })
  encodingType?: AnalyzeEntitiesRequestEncodingTypeEnum;
}
