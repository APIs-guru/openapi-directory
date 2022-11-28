import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A coordinate in a sheet. All indexes are zero-based.
**/
export declare class GridCoordinate extends SpeakeasyBase {
    columnIndex?: number;
    rowIndex?: number;
    sheetId?: number;
}
