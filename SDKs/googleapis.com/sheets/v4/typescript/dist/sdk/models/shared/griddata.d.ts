import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionProperties } from "./dimensionproperties";
import { RowData } from "./rowdata";
/**
 * Data in the grid, as well as metadata about the dimensions.
**/
export declare class GridData extends SpeakeasyBase {
    columnMetadata?: DimensionProperties[];
    rowData?: RowData[];
    rowMetadata?: DimensionProperties[];
    startColumn?: number;
    startRow?: number;
}
