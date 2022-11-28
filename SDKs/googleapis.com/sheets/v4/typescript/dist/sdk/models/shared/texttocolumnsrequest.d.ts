import { SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
export declare enum TextToColumnsRequestDelimiterTypeEnum {
    DelimiterTypeUnspecified = "DELIMITER_TYPE_UNSPECIFIED",
    Comma = "COMMA",
    Semicolon = "SEMICOLON",
    Period = "PERIOD",
    Space = "SPACE",
    Custom = "CUSTOM",
    Autodetect = "AUTODETECT"
}
/**
 * Splits a column of text into multiple columns, based on a delimiter in each cell.
**/
export declare class TextToColumnsRequest extends SpeakeasyBase {
    delimiter?: string;
    delimiterType?: TextToColumnsRequestDelimiterTypeEnum;
    source?: GridRange;
}
