import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Job } from "./job";


// ListJobsResponse
/** 
 * Response message for ReportingService.ListJobs.
**/
export class ListJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.Job })
  jobs?: Job[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
