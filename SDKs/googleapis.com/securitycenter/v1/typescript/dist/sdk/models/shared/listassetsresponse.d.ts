import { SpeakeasyBase } from "../../../internal/utils";
import { ListAssetsResult } from "./listassetsresult";
/**
 * Response message for listing assets.
**/
export declare class ListAssetsResponse extends SpeakeasyBase {
    listAssetsResults?: ListAssetsResult[];
    nextPageToken?: string;
    readTime?: string;
    totalSize?: number;
}
