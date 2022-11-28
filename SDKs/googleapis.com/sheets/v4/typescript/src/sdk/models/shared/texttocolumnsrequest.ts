import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";


export enum TextToColumnsRequestDelimiterTypeEnum {
    DelimiterTypeUnspecified = "DELIMITER_TYPE_UNSPECIFIED",
    Comma = "COMMA",
    Semicolon = "SEMICOLON",
    Period = "PERIOD",
    Space = "SPACE",
    Custom = "CUSTOM",
    Autodetect = "AUTODETECT"
}


// TextToColumnsRequest
/** 
 * Splits a column of text into multiple columns, based on a delimiter in each cell.
**/
export class TextToColumnsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delimiter" })
  delimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=delimiterType" })
  delimiterType?: TextToColumnsRequestDelimiterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GridRange;
}
