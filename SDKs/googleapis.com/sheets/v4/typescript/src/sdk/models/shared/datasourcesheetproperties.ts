import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumn } from "./datasourcecolumn";
import { DataExecutionStatus } from "./dataexecutionstatus";



// DataSourceSheetProperties
/** 
 * Additional properties of a DATA_SOURCE sheet.
**/
export class DataSourceSheetProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns", elemType: DataSourceColumn })
  columns?: DataSourceColumn[];

  @SpeakeasyMetadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @SpeakeasyMetadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;
}
