import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridRange } from "./gridrange";

export enum TextToColumnsRequestDelimiterTypeEnum {
    DelimiterTypeUnspecified = "DELIMITER_TYPE_UNSPECIFIED"
,    Comma = "COMMA"
,    Semicolon = "SEMICOLON"
,    Period = "PERIOD"
,    Space = "SPACE"
,    Custom = "CUSTOM"
,    Autodetect = "AUTODETECT"
}


// TextToColumnsRequest
/** 
 * Splits a column of text into multiple columns, based on a delimiter in each cell.
**/
export class TextToColumnsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=delimiter" })
  delimiter?: string;

  @Metadata({ data: "json, name=delimiterType" })
  delimiterType?: TextToColumnsRequestDelimiterTypeEnum;

  @Metadata({ data: "json, name=source" })
  source?: GridRange;
}
