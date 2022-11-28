import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding).
**/
export declare class GoogleCloudDatacatalogV1BigQueryDateShardedSpec extends SpeakeasyBase {
    dataset?: string;
    latestShardResource?: string;
    shardCount?: string;
    tablePrefix?: string;
}
