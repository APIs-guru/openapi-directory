import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
export declare enum AnalyzeSyntaxRequestEncodingTypeEnum {
    None = "NONE",
    Utf8 = "UTF8",
    Utf16 = "UTF16",
    Utf32 = "UTF32"
}
/**
 * The syntax analysis request message.
**/
export declare class AnalyzeSyntaxRequest extends SpeakeasyBase {
    document?: Document;
    encodingType?: AnalyzeSyntaxRequestEncodingTypeEnum;
}
