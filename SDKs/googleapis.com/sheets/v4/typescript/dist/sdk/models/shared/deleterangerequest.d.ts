import { SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
export declare enum DeleteRangeRequestShiftDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}
/**
 * Deletes a range of cells, shifting other cells into the deleted area.
**/
export declare class DeleteRangeRequest extends SpeakeasyBase {
    range?: GridRange;
    shiftDimension?: DeleteRangeRequestShiftDimensionEnum;
}
