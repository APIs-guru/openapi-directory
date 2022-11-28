import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailedLocation } from "./failedlocation";
import { Job } from "./job";



// ListJobsResponse
/** 
 * Response to a request to list Cloud Dataflow jobs in a project. This might be a partial response, depending on the page size in the ListJobsRequest. However, if the project does not have any jobs, an instance of ListJobsResponse is not returned and the requests's response body is empty {}.
**/
export class ListJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedLocation", elemType: FailedLocation })
  failedLocation?: FailedLocation[];

  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: Job })
  jobs?: Job[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
