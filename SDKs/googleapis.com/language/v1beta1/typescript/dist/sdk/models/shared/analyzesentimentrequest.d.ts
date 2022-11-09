import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Document } from "./document";
export declare enum AnalyzeSentimentRequestEncodingTypeEnum {
    None = "NONE",
    Utf8 = "UTF8",
    Utf16 = "UTF16",
    Utf32 = "UTF32"
}
/**
 * The sentiment analysis request message.
**/
export declare class AnalyzeSentimentRequest extends SpeakeasyBase {
    document?: Document;
    encodingType?: AnalyzeSentimentRequestEncodingTypeEnum;
}
