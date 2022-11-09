import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { DataSourceObjectReference } from "./datasourceobjectreference";


// RefreshDataSourceObjectExecutionStatus
/** 
 * The execution status of refreshing one data source object.
**/
export class RefreshDataSourceObjectExecutionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @Metadata({ data: "json, name=reference" })
  reference?: DataSourceObjectReference;
}
