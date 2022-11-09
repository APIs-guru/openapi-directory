import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { DataSource } from "./datasource";


// UpdateDataSourceResponse
/** 
 * The response from updating data source.
**/
export class UpdateDataSourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @Metadata({ data: "json, name=dataSource" })
  dataSource?: DataSource;
}
