import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Job } from "./googlecloudrunv2job";



// GoogleCloudRunV2ListJobsResponse
/** 
 * Response message containing a list of Jobs.
**/
export class GoogleCloudRunV2ListJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: GoogleCloudRunV2Job })
  jobs?: GoogleCloudRunV2Job[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
