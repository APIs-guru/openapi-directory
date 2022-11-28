import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detailed statistics on the entry's usage. Usage statistics have the following limitations: - Only BigQuery tables have them. - They only include BigQuery query jobs. - They might be underestimated because wildcard table references are not yet counted. For more information, see [Querying multiple tables using a wildcard table] (https://cloud.google.com/bigquery/docs/querying-wildcard-tables)
**/
export declare class GoogleCloudDatacatalogV1UsageStats extends SpeakeasyBase {
    totalCancellations?: number;
    totalCompletions?: number;
    totalExecutionTimeForCompletionsMillis?: number;
    totalFailures?: number;
}
