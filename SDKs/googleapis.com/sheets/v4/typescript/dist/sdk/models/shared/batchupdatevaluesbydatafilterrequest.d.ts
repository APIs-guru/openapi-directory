import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilterValueRange } from "./datafiltervaluerange";
export declare enum BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}
export declare enum BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}
export declare enum BatchUpdateValuesByDataFilterRequestValueInputOptionEnum {
    InputValueOptionUnspecified = "INPUT_VALUE_OPTION_UNSPECIFIED",
    Raw = "RAW",
    UserEntered = "USER_ENTERED"
}
/**
 * The request for updating more than one range of values in a spreadsheet.
**/
export declare class BatchUpdateValuesByDataFilterRequest extends SpeakeasyBase {
    data?: DataFilterValueRange[];
    includeValuesInResponse?: boolean;
    responseDateTimeRenderOption?: BatchUpdateValuesByDataFilterRequestResponseDateTimeRenderOptionEnum;
    responseValueRenderOption?: BatchUpdateValuesByDataFilterRequestResponseValueRenderOptionEnum;
    valueInputOption?: BatchUpdateValuesByDataFilterRequestValueInputOptionEnum;
}
