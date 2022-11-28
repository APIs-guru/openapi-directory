import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) is allowed.
**/
export declare class BigQueryTableSpec extends SpeakeasyBase {
    datasetId?: string;
    tableId?: string;
    tableProjectId?: string;
}
