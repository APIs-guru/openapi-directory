import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec
/** 
 * Spec for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding
**/
export class GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataset" })
  dataset?: string;

  @SpeakeasyMetadata({ data: "json, name=shardCount" })
  shardCount?: string;

  @SpeakeasyMetadata({ data: "json, name=tablePrefix" })
  tablePrefix?: string;
}
