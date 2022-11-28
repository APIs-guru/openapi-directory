import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { DataSource } from "./datasource";



// AddDataSourceResponse
/** 
 * The result of adding a data source.
**/
export class AddDataSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @SpeakeasyMetadata({ data: "json, name=dataSource" })
  dataSource?: DataSource;
}
