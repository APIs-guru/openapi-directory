import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * The response for ListInstances.
**/
export declare class ListInstancesResponse extends SpeakeasyBase {
    instances?: Instance[];
    nextPageToken?: string;
    unreachable?: string[];
}
