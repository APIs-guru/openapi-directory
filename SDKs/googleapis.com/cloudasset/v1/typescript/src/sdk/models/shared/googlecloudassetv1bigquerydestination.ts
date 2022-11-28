import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum {
    PartitionKeyUnspecified = "PARTITION_KEY_UNSPECIFIED",
    RequestTime = "REQUEST_TIME"
}


// GoogleCloudAssetV1BigQueryDestination
/** 
 * A BigQuery destination.
**/
export class GoogleCloudAssetV1BigQueryDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataset" })
  dataset?: string;

  @SpeakeasyMetadata({ data: "json, name=partitionKey" })
  partitionKey?: GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=tablePrefix" })
  tablePrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=writeDisposition" })
  writeDisposition?: string;
}
