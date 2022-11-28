import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Partition } from "./googleclouddataplexv1partition";



// GoogleCloudDataplexV1ListPartitionsResponse
/** 
 * List metadata partitions response.
**/
export class GoogleCloudDataplexV1ListPartitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=partitions", elemType: GoogleCloudDataplexV1Partition })
  partitions?: GoogleCloudDataplexV1Partition[];
}
