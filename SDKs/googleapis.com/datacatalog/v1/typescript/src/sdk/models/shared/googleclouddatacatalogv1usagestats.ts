import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1UsageStats
/** 
 * Detailed statistics on the entry's usage. Usage statistics have the following limitations: - Only BigQuery tables have them. - They only include BigQuery query jobs. - They might be underestimated because wildcard table references are not yet counted. For more information, see [Querying multiple tables using a wildcard table] (https://cloud.google.com/bigquery/docs/querying-wildcard-tables)
**/
export class GoogleCloudDatacatalogV1UsageStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=totalCancellations" })
  totalCancellations?: number;

  @SpeakeasyMetadata({ data: "json, name=totalCompletions" })
  totalCompletions?: number;

  @SpeakeasyMetadata({ data: "json, name=totalExecutionTimeForCompletionsMillis" })
  totalExecutionTimeForCompletionsMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=totalFailures" })
  totalFailures?: number;
}
