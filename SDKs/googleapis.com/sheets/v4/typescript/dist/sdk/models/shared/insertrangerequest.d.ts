import { SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
export declare enum InsertRangeRequestShiftDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}
/**
 * Inserts cells into a range, shifting the existing cells over or down.
**/
export declare class InsertRangeRequest extends SpeakeasyBase {
    range?: GridRange;
    shiftDimension?: InsertRangeRequestShiftDimensionEnum;
}
