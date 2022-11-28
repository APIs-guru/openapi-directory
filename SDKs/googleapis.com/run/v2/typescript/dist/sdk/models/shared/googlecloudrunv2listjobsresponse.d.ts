import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Job } from "./googlecloudrunv2job";
/**
 * Response message containing a list of Jobs.
**/
export declare class GoogleCloudRunV2ListJobsResponse extends SpeakeasyBase {
    jobs?: GoogleCloudRunV2Job[];
    nextPageToken?: string;
}
