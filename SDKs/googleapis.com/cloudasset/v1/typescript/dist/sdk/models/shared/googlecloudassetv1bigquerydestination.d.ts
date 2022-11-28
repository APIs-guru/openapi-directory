import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum {
    PartitionKeyUnspecified = "PARTITION_KEY_UNSPECIFIED",
    RequestTime = "REQUEST_TIME"
}
/**
 * A BigQuery destination.
**/
export declare class GoogleCloudAssetV1BigQueryDestination extends SpeakeasyBase {
    dataset?: string;
    partitionKey?: GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum;
    tablePrefix?: string;
    writeDisposition?: string;
}
