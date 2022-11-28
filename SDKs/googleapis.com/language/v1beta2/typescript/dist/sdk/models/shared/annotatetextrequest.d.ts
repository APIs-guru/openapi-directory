import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { Features } from "./features";
export declare enum AnnotateTextRequestEncodingTypeEnum {
    None = "NONE",
    Utf8 = "UTF8",
    Utf16 = "UTF16",
    Utf32 = "UTF32"
}
/**
 * The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call.
**/
export declare class AnnotateTextRequest extends SpeakeasyBase {
    document?: Document;
    encodingType?: AnnotateTextRequestEncodingTypeEnum;
    features?: Features;
}
