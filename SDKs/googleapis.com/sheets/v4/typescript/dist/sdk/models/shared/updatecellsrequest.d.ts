import { SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
import { RowData } from "./rowdata";
import { GridCoordinate } from "./gridcoordinate";
/**
 * Updates all cells in a range with new data.
**/
export declare class UpdateCellsRequest extends SpeakeasyBase {
    fields?: string;
    range?: GridRange;
    rows?: RowData[];
    start?: GridCoordinate;
}
