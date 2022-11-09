import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum {
    PartitionKeyUnspecified = "PARTITION_KEY_UNSPECIFIED"
,    RequestTime = "REQUEST_TIME"
}


// GoogleCloudAssetV1BigQueryDestination
/** 
 * A BigQuery destination.
**/
export class GoogleCloudAssetV1BigQueryDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataset" })
  dataset?: string;

  @Metadata({ data: "json, name=partitionKey" })
  partitionKey?: GoogleCloudAssetV1BigQueryDestinationPartitionKeyEnum;

  @Metadata({ data: "json, name=tablePrefix" })
  tablePrefix?: string;

  @Metadata({ data: "json, name=writeDisposition" })
  writeDisposition?: string;
}
