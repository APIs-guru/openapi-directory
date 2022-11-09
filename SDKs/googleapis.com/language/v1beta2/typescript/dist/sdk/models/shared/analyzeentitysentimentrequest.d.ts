import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Document } from "./document";
export declare enum AnalyzeEntitySentimentRequestEncodingTypeEnum {
    None = "NONE",
    Utf8 = "UTF8",
    Utf16 = "UTF16",
    Utf32 = "UTF32"
}
/**
 * The entity-level sentiment analysis request message.
**/
export declare class AnalyzeEntitySentimentRequest extends SpeakeasyBase {
    document?: Document;
    encodingType?: AnalyzeEntitySentimentRequestEncodingTypeEnum;
}
