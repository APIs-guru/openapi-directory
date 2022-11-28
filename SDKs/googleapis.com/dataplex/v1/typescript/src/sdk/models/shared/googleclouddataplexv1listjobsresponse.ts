import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Job } from "./googleclouddataplexv1job";



// GoogleCloudDataplexV1ListJobsResponse
/** 
 * List jobs response.
**/
export class GoogleCloudDataplexV1ListJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: GoogleCloudDataplexV1Job })
  jobs?: GoogleCloudDataplexV1Job[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
