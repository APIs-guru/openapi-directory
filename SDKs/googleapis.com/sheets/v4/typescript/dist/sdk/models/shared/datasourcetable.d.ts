import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { FilterSpec } from "./filterspec";
import { SortSpec } from "./sortspec";
export declare enum DataSourceTableColumnSelectionTypeEnum {
    DataSourceTableColumnSelectionTypeUnspecified = "DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED",
    Selected = "SELECTED",
    SyncAll = "SYNC_ALL"
}
/**
 * A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as "Extract" in the Sheets editor.
**/
export declare class DataSourceTable extends SpeakeasyBase {
    columnSelectionType?: DataSourceTableColumnSelectionTypeEnum;
    columns?: DataSourceColumnReference[];
    dataExecutionStatus?: DataExecutionStatus;
    dataSourceId?: string;
    filterSpecs?: FilterSpec[];
    rowLimit?: number;
    sortSpecs?: SortSpec[];
}
