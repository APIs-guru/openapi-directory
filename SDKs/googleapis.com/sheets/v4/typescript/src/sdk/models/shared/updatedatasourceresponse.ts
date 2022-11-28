import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { DataSource } from "./datasource";



// UpdateDataSourceResponse
/** 
 * The response from updating data source.
**/
export class UpdateDataSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @SpeakeasyMetadata({ data: "json, name=dataSource" })
  dataSource?: DataSource;
}
