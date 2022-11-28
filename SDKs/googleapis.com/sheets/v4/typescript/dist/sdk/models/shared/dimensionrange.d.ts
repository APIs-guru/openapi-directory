import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DimensionRangeDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}
/**
 * A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.
**/
export declare class DimensionRange extends SpeakeasyBase {
    dimension?: DimensionRangeDimensionEnum;
    endIndex?: number;
    sheetId?: number;
    startIndex?: number;
}
