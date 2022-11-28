import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1BigQueryDateShardedSpec
/** 
 * Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding).
**/
export class GoogleCloudDatacatalogV1BigQueryDateShardedSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataset" })
  dataset?: string;

  @SpeakeasyMetadata({ data: "json, name=latestShardResource" })
  latestShardResource?: string;

  @SpeakeasyMetadata({ data: "json, name=shardCount" })
  shardCount?: string;

  @SpeakeasyMetadata({ data: "json, name=tablePrefix" })
  tablePrefix?: string;
}
