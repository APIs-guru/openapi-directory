import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { DataSource } from "./datasource";


// AddDataSourceResponse
/** 
 * The result of adding a data source.
**/
export class AddDataSourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @Metadata({ data: "json, name=dataSource" })
  dataSource?: DataSource;
}
