import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDataplexV1Partition } from "./googleclouddataplexv1partition";


// GoogleCloudDataplexV1ListPartitionsResponse
/** 
 * List metadata partitions response.
**/
export class GoogleCloudDataplexV1ListPartitionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=partitions", elemType: shared.GoogleCloudDataplexV1Partition })
  partitions?: GoogleCloudDataplexV1Partition[];
}
