import { SpeakeasyBase } from "../../../internal/utils";
import { ValueRange } from "./valuerange";
export declare enum BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}
export declare enum BatchUpdateValuesRequestResponseValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}
export declare enum BatchUpdateValuesRequestValueInputOptionEnum {
    InputValueOptionUnspecified = "INPUT_VALUE_OPTION_UNSPECIFIED",
    Raw = "RAW",
    UserEntered = "USER_ENTERED"
}
/**
 * The request for updating more than one range of values in a spreadsheet.
**/
export declare class BatchUpdateValuesRequest extends SpeakeasyBase {
    data?: ValueRange[];
    includeValuesInResponse?: boolean;
    responseDateTimeRenderOption?: BatchUpdateValuesRequestResponseDateTimeRenderOptionEnum;
    responseValueRenderOption?: BatchUpdateValuesRequestResponseValueRenderOptionEnum;
    valueInputOption?: BatchUpdateValuesRequestValueInputOptionEnum;
}
