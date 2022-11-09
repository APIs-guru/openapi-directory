import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Document } from "./document";
import { Features } from "./features";

export enum AnnotateTextRequestEncodingTypeEnum {
    None = "NONE"
,    Utf8 = "UTF8"
,    Utf16 = "UTF16"
,    Utf32 = "UTF32"
}


// AnnotateTextRequest
/** 
 * The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call.
**/
export class AnnotateTextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=document" })
  document?: Document;

  @Metadata({ data: "json, name=encodingType" })
  encodingType?: AnnotateTextRequestEncodingTypeEnum;

  @Metadata({ data: "json, name=features" })
  features?: Features;
}
