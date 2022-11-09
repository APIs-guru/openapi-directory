import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatacatalogV1BigQueryDateShardedSpec
/** 
 * Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding).
**/
export class GoogleCloudDatacatalogV1BigQueryDateShardedSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataset" })
  dataset?: string;

  @Metadata({ data: "json, name=latestShardResource" })
  latestShardResource?: string;

  @Metadata({ data: "json, name=shardCount" })
  shardCount?: string;

  @Metadata({ data: "json, name=tablePrefix" })
  tablePrefix?: string;
}
