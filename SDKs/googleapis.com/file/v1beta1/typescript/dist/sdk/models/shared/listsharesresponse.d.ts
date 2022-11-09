import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Share } from "./share";
/**
 * ListSharesResponse is the result of ListSharesRequest.
**/
export declare class ListSharesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    shares?: Share[];
    unreachable?: string[];
}
