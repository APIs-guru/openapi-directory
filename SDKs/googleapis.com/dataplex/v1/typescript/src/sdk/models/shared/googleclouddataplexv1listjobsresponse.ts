import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDataplexV1Job } from "./googleclouddataplexv1job";


// GoogleCloudDataplexV1ListJobsResponse
/** 
 * List jobs response.
**/
export class GoogleCloudDataplexV1ListJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.GoogleCloudDataplexV1Job })
  jobs?: GoogleCloudDataplexV1Job[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
