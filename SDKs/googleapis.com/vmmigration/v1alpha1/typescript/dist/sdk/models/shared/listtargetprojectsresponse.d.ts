import { SpeakeasyBase } from "../../../internal/utils";
import { TargetProject } from "./targetproject";
/**
 * Response message for 'ListTargetProjects' call.
**/
export declare class ListTargetProjectsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    targetProjects?: TargetProject[];
    unreachable?: string[];
}
