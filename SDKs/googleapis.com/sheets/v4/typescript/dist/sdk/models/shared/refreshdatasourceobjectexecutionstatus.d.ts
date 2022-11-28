import { SpeakeasyBase } from "../../../internal/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { DataSourceObjectReference } from "./datasourceobjectreference";
/**
 * The execution status of refreshing one data source object.
**/
export declare class RefreshDataSourceObjectExecutionStatus extends SpeakeasyBase {
    dataExecutionStatus?: DataExecutionStatus;
    reference?: DataSourceObjectReference;
}
