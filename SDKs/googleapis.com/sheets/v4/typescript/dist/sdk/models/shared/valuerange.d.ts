import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ValueRangeMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}
/**
 * Data within a range of the spreadsheet.
**/
export declare class ValueRange extends SpeakeasyBase {
    majorDimension?: ValueRangeMajorDimensionEnum;
    range?: string;
    values?: any[][];
}
