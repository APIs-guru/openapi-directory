import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV2Job } from "./googlecloudrunv2job";


// GoogleCloudRunV2ListJobsResponse
/** 
 * Response message containing a list of Jobs.
**/
export class GoogleCloudRunV2ListJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.GoogleCloudRunV2Job })
  jobs?: GoogleCloudRunV2Job[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
