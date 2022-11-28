import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RefreshDataSourceObjectExecutionStatus } from "./refreshdatasourceobjectexecutionstatus";



// RefreshDataSourceResponse
/** 
 * The response from refreshing one or multiple data source objects.
**/
export class RefreshDataSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=statuses", elemType: RefreshDataSourceObjectExecutionStatus })
  statuses?: RefreshDataSourceObjectExecutionStatus[];
}
