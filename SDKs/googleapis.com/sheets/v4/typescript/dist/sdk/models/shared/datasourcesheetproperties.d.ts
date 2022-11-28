import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumn } from "./datasourcecolumn";
import { DataExecutionStatus } from "./dataexecutionstatus";
/**
 * Additional properties of a DATA_SOURCE sheet.
**/
export declare class DataSourceSheetProperties extends SpeakeasyBase {
    columns?: DataSourceColumn[];
    dataExecutionStatus?: DataExecutionStatus;
    dataSourceId?: string;
}
