import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * A list of jobs in a project.
**/
export declare class ListJobsResponse extends SpeakeasyBase {
    jobs?: Job[];
    nextPageToken?: string;
}
