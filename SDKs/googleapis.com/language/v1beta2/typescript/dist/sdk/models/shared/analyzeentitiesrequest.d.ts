import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Document } from "./document";
export declare enum AnalyzeEntitiesRequestEncodingTypeEnum {
    None = "NONE",
    Utf8 = "UTF8",
    Utf16 = "UTF16",
    Utf32 = "UTF32"
}
/**
 * The entity analysis request message.
**/
export declare class AnalyzeEntitiesRequest extends SpeakeasyBase {
    document?: Document;
    encodingType?: AnalyzeEntitiesRequestEncodingTypeEnum;
}
