import { SpeakeasyBase } from "../../../internal/utils";
import { CutoverJob } from "./cutoverjob";
/**
 * Response message for 'ListCutoverJobs' request.
**/
export declare class ListCutoverJobsResponse extends SpeakeasyBase {
    cutoverJobs?: CutoverJob[];
    nextPageToken?: string;
    unreachable?: string[];
}
