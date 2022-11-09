import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1Job } from "./googlecloudmlv1job";


// GoogleCloudMlV1ListJobsResponse
/** 
 * Response message for the ListJobs method.
**/
export class GoogleCloudMlV1ListJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.GoogleCloudMlV1Job })
  jobs?: GoogleCloudMlV1Job[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
