import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Instance } from "./instance";
/**
 * Response message for the list instance request.
**/
export declare class ListInstancesResponse extends SpeakeasyBase {
    instances?: Instance[];
    nextPageToken?: string;
    unreachable?: string[];
}
