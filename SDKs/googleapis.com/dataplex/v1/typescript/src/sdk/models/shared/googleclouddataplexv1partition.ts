import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1PartitionInput
/** 
 * Represents partition metadata contained within entity instances.
**/
export class GoogleCloudDataplexV1PartitionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}


// GoogleCloudDataplexV1Partition
/** 
 * Represents partition metadata contained within entity instances.
**/
export class GoogleCloudDataplexV1Partition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
