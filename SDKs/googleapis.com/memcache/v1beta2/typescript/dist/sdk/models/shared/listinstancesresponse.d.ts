import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * Response for ListInstances.
**/
export declare class ListInstancesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    resources?: Instance[];
    unreachable?: string[];
}
