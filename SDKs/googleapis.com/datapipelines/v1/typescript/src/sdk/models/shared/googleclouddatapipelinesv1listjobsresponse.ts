import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatapipelinesV1Job } from "./googleclouddatapipelinesv1job";


// GoogleCloudDatapipelinesV1ListJobsResponse
/** 
 * Response message for ListJobs
**/
export class GoogleCloudDatapipelinesV1ListJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.GoogleCloudDatapipelinesV1Job })
  jobs?: GoogleCloudDatapipelinesV1Job[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
