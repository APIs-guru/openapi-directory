import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
export declare enum BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum {
    SerialNumber = "SERIAL_NUMBER",
    FormattedString = "FORMATTED_STRING"
}
export declare enum BatchGetValuesByDataFilterRequestMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}
export declare enum BatchGetValuesByDataFilterRequestValueRenderOptionEnum {
    FormattedValue = "FORMATTED_VALUE",
    UnformattedValue = "UNFORMATTED_VALUE",
    Formula = "FORMULA"
}
/**
 * The request for retrieving a range of values in a spreadsheet selected by a set of DataFilters.
**/
export declare class BatchGetValuesByDataFilterRequest extends SpeakeasyBase {
    dataFilters?: DataFilter[];
    dateTimeRenderOption?: BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum;
    majorDimension?: BatchGetValuesByDataFilterRequestMajorDimensionEnum;
    valueRenderOption?: BatchGetValuesByDataFilterRequestValueRenderOptionEnum;
}
