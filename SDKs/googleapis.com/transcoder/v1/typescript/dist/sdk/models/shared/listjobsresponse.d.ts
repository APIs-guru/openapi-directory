import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Job } from "./job";
/**
 * Response message for `TranscoderService.ListJobs`.
**/
export declare class ListJobsResponse extends SpeakeasyBase {
    jobs?: Job[];
    nextPageToken?: string;
    unreachable?: string[];
}
