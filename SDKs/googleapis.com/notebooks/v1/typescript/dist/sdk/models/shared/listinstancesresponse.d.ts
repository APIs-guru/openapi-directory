import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Instance } from "./instance";
/**
 * Response for listing notebook instances.
**/
export declare class ListInstancesResponse extends SpeakeasyBase {
    instances?: Instance[];
    nextPageToken?: string;
    unreachable?: string[];
}
