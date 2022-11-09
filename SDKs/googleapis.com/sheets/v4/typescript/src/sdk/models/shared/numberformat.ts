import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NumberFormatTypeEnum {
    NumberFormatTypeUnspecified = "NUMBER_FORMAT_TYPE_UNSPECIFIED"
,    Text = "TEXT"
,    Number = "NUMBER"
,    Percent = "PERCENT"
,    Currency = "CURRENCY"
,    Date = "DATE"
,    Time = "TIME"
,    DateTime = "DATE_TIME"
,    Scientific = "SCIENTIFIC"
}


// NumberFormat
/** 
 * The number format of a cell.
**/
export class NumberFormat extends SpeakeasyBase {
  @Metadata({ data: "json, name=pattern" })
  pattern?: string;

  @Metadata({ data: "json, name=type" })
  type?: NumberFormatTypeEnum;
}
