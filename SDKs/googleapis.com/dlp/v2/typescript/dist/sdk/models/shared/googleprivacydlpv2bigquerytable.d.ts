import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.
**/
export declare class GooglePrivacyDlpV2BigQueryTable extends SpeakeasyBase {
    datasetId?: string;
    projectId?: string;
    tableId?: string;
}
