import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Spec for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding
**/
export declare class GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec extends SpeakeasyBase {
    dataset?: string;
    shardCount?: string;
    tablePrefix?: string;
}
