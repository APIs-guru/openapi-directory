import { SpeakeasyBase } from "../../../internal/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { DataSource } from "./datasource";
/**
 * The response from updating data source.
**/
export declare class UpdateDataSourceResponse extends SpeakeasyBase {
    dataExecutionStatus?: DataExecutionStatus;
    dataSource?: DataSource;
}
