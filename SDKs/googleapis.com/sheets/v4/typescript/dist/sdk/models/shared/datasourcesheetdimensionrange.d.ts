import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
/**
 * A range along a single dimension on a DATA_SOURCE sheet.
**/
export declare class DataSourceSheetDimensionRange extends SpeakeasyBase {
    columnReferences?: DataSourceColumnReference[];
    sheetId?: number;
}
