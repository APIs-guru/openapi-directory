import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * A response message from a request to list.
**/
export declare class ListAssetsResponse extends SpeakeasyBase {
    assets?: Asset[];
    nextPageToken?: string;
    totalSize?: number;
}
