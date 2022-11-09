import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatacatalogV1beta1UsageStats
/** 
 * Detailed counts on the entry's usage. Caveats: - Only BigQuery tables have usage stats - The usage stats only include BigQuery query jobs - The usage stats might be underestimated, e.g. wildcard table references are not yet counted in usage computation https://cloud.google.com/bigquery/docs/querying-wildcard-tables
**/
export class GoogleCloudDatacatalogV1beta1UsageStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=totalCancellations" })
  totalCancellations?: number;

  @Metadata({ data: "json, name=totalCompletions" })
  totalCompletions?: number;

  @Metadata({ data: "json, name=totalExecutionTimeForCompletionsMillis" })
  totalExecutionTimeForCompletionsMillis?: number;

  @Metadata({ data: "json, name=totalFailures" })
  totalFailures?: number;
}
