import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSourceColumn } from "./datasourcecolumn";
import { DataExecutionStatus } from "./dataexecutionstatus";


// DataSourceSheetProperties
/** 
 * Additional properties of a DATA_SOURCE sheet.
**/
export class DataSourceSheetProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns", elemType: shared.DataSourceColumn })
  columns?: DataSourceColumn[];

  @Metadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @Metadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;
}
