import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NumberFormatTypeEnum {
    NumberFormatTypeUnspecified = "NUMBER_FORMAT_TYPE_UNSPECIFIED",
    Text = "TEXT",
    Number = "NUMBER",
    Percent = "PERCENT",
    Currency = "CURRENCY",
    Date = "DATE",
    Time = "TIME",
    DateTime = "DATE_TIME",
    Scientific = "SCIENTIFIC"
}
/**
 * The number format of a cell.
**/
export declare class NumberFormat extends SpeakeasyBase {
    pattern?: string;
    type?: NumberFormatTypeEnum;
}
