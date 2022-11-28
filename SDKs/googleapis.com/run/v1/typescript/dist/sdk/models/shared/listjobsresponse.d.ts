import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
import { ListMeta } from "./listmeta";
/**
 * ListJobsResponse is a list of Jobs resources.
**/
export declare class ListJobsResponse extends SpeakeasyBase {
    apiVersion?: string;
    items?: Job[];
    kind?: string;
    metadata?: ListMeta;
    unreachable?: string[];
}
