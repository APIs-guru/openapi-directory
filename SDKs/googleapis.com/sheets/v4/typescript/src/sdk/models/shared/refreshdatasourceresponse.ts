import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RefreshDataSourceObjectExecutionStatus } from "./refreshdatasourceobjectexecutionstatus";


// RefreshDataSourceResponse
/** 
 * The response from refreshing one or multiple data source objects.
**/
export class RefreshDataSourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=statuses", elemType: shared.RefreshDataSourceObjectExecutionStatus })
  statuses?: RefreshDataSourceObjectExecutionStatus[];
}
