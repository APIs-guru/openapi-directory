import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Job } from "./job";
import { ResponseMetadata } from "./responsemetadata";


// ListJobsResponse
/** 
 * List jobs response.
**/
export class ListJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.Job })
  jobs?: Job[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: ResponseMetadata;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
