import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
import { ResponseMetadata } from "./responsemetadata";
/**
 * Output only. List jobs response.
**/
export declare class ListJobsResponse extends SpeakeasyBase {
    jobs?: Job[];
    metadata?: ResponseMetadata;
    nextPageToken?: string;
}
