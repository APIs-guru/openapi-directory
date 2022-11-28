import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Job } from "./googlecloudmlv1job";



// GoogleCloudMlV1ListJobsResponse
/** 
 * Response message for the ListJobs method.
**/
export class GoogleCloudMlV1ListJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: GoogleCloudMlV1Job })
  jobs?: GoogleCloudMlV1Job[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
