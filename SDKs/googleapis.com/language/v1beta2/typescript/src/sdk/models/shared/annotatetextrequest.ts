import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { Features } from "./features";


export enum AnnotateTextRequestEncodingTypeEnum {
    None = "NONE",
    Utf8 = "UTF8",
    Utf16 = "UTF16",
    Utf32 = "UTF32"
}


// AnnotateTextRequest
/** 
 * The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call.
**/
export class AnnotateTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: Document;

  @SpeakeasyMetadata({ data: "json, name=encodingType" })
  encodingType?: AnnotateTextRequestEncodingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: Features;
}
