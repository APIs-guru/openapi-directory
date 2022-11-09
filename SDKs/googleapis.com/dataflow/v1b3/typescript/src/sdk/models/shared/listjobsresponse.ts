import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailedLocation } from "./failedlocation";
import { Job } from "./job";


// ListJobsResponse
/** 
 * Response to a request to list Cloud Dataflow jobs in a project. This might be a partial response, depending on the page size in the ListJobsRequest. However, if the project does not have any jobs, an instance of ListJobsResponse is not returned and the requests's response body is empty {}.
**/
export class ListJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedLocation", elemType: shared.FailedLocation })
  failedLocation?: FailedLocation[];

  @Metadata({ data: "json, name=jobs", elemType: shared.Job })
  jobs?: Job[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
