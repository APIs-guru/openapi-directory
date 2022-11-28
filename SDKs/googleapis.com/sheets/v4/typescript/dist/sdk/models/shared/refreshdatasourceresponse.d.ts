import { SpeakeasyBase } from "../../../internal/utils";
import { RefreshDataSourceObjectExecutionStatus } from "./refreshdatasourceobjectexecutionstatus";
/**
 * The response from refreshing one or multiple data source objects.
**/
export declare class RefreshDataSourceResponse extends SpeakeasyBase {
    statuses?: RefreshDataSourceObjectExecutionStatus[];
}
