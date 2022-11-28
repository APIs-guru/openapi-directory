import { SpeakeasyBase } from "../../../internal/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { DataSource } from "./datasource";
/**
 * The result of adding a data source.
**/
export declare class AddDataSourceResponse extends SpeakeasyBase {
    dataExecutionStatus?: DataExecutionStatus;
    dataSource?: DataSource;
}
