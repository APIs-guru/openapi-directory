import { SpeakeasyBase } from "../../../internal/utils";
import { GridCoordinate } from "./gridcoordinate";
/**
 * Reference to a data source object.
**/
export declare class DataSourceObjectReference extends SpeakeasyBase {
    chartId?: number;
    dataSourceFormulaCell?: GridCoordinate;
    dataSourcePivotTableAnchorCell?: GridCoordinate;
    dataSourceTableAnchorCell?: GridCoordinate;
    sheetId?: string;
}
