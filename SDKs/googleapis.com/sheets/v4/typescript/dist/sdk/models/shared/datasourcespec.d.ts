import { SpeakeasyBase } from "../../../internal/utils";
import { BigQueryDataSourceSpec } from "./bigquerydatasourcespec";
import { DataSourceParameter } from "./datasourceparameter";
/**
 * This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.
**/
export declare class DataSourceSpec extends SpeakeasyBase {
    bigQuery?: BigQueryDataSourceSpec;
    parameters?: DataSourceParameter[];
}
