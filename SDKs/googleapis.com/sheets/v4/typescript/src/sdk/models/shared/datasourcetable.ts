import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { FilterSpec } from "./filterspec";
import { SortSpec } from "./sortspec";


export enum DataSourceTableColumnSelectionTypeEnum {
    DataSourceTableColumnSelectionTypeUnspecified = "DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED",
    Selected = "SELECTED",
    SyncAll = "SYNC_ALL"
}


// DataSourceTable
/** 
 * A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as "Extract" in the Sheets editor.
**/
export class DataSourceTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnSelectionType" })
  columnSelectionType?: DataSourceTableColumnSelectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=columns", elemType: DataSourceColumnReference })
  columns?: DataSourceColumnReference[];

  @SpeakeasyMetadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @SpeakeasyMetadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=filterSpecs", elemType: FilterSpec })
  filterSpecs?: FilterSpec[];

  @SpeakeasyMetadata({ data: "json, name=rowLimit" })
  rowLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=sortSpecs", elemType: SortSpec })
  sortSpecs?: SortSpec[];
}
