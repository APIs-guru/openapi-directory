import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
export declare enum DataFilterValueRangeMajorDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}
/**
 * A range of values whose location is specified by a DataFilter.
**/
export declare class DataFilterValueRange extends SpeakeasyBase {
    dataFilter?: DataFilter;
    majorDimension?: DataFilterValueRangeMajorDimensionEnum;
    values?: any[][];
}
