import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AppendDimensionRequestDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}
/**
 * Appends rows or columns to the end of a sheet.
**/
export declare class AppendDimensionRequest extends SpeakeasyBase {
    dimension?: AppendDimensionRequestDimensionEnum;
    length?: number;
    sheetId?: number;
}
