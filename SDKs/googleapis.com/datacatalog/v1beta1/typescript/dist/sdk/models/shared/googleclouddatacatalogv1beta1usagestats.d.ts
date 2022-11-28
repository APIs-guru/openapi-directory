import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detailed counts on the entry's usage. Caveats: - Only BigQuery tables have usage stats - The usage stats only include BigQuery query jobs - The usage stats might be underestimated, e.g. wildcard table references are not yet counted in usage computation https://cloud.google.com/bigquery/docs/querying-wildcard-tables
**/
export declare class GoogleCloudDatacatalogV1beta1UsageStats extends SpeakeasyBase {
    totalCancellations?: number;
    totalCompletions?: number;
    totalExecutionTimeForCompletionsMillis?: number;
    totalFailures?: number;
}
