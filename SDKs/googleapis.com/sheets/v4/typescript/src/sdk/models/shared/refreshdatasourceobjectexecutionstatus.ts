import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { DataSourceObjectReference } from "./datasourceobjectreference";



// RefreshDataSourceObjectExecutionStatus
/** 
 * The execution status of refreshing one data source object.
**/
export class RefreshDataSourceObjectExecutionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataExecutionStatus" })
  dataExecutionStatus?: DataExecutionStatus;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: DataSourceObjectReference;
}
