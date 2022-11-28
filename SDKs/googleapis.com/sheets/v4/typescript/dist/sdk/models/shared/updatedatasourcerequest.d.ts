import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
/**
 * Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the associated DATA_SOURCE sheet to read data from the updated data source. The request requires an additional `bigquery.readonly` OAuth scope.
**/
export declare class UpdateDataSourceRequest extends SpeakeasyBase {
    dataSource?: DataSource;
    fields?: string;
}
