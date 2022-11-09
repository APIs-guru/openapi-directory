import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { FilterSpec } from "./filterspec";
import { SortSpec } from "./sortspec";

export enum DataSourceTableColumnSelectionTypeEnum {
    DataSourceTableColumnSelectionTypeUnspecified = "DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED"
,    Selected = "SELECTED"
,    SyncAll = "SYNC_ALL"
}


// DataSourceTable
/** 
 * A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as "Extract" in the Sheets editor.
**/
export class DataSourceTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnSelectionType" })
  columnSelectionType?: DataSourceTableColumnSelectionTypeEnum;

  @Metadata({ data: "json, name=columns", elemType: shared.DataSourceColumnReference })
  columns?: DataSourceColumnReference[];

  @Metadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @Metadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @Metadata({ data: "json, name=filterSpecs", elemType: shared.FilterSpec })
  filterSpecs?: FilterSpec[];

  @Metadata({ data: "json, name=rowLimit" })
  rowLimit?: number;

  @Metadata({ data: "json, name=sortSpecs", elemType: shared.SortSpec })
  sortSpecs?: SortSpec[];
}
