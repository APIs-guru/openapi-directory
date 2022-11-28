import { SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";
/**
 * ListInstancesResponse is the result of ListInstancesRequest.
**/
export declare class ListInstancesResponse extends SpeakeasyBase {
    instances?: Instance[];
    nextPageToken?: string;
    unreachable?: string[];
}
