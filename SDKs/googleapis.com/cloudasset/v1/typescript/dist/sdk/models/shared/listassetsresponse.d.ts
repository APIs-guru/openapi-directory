import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * ListAssets response.
**/
export declare class ListAssetsResponse extends SpeakeasyBase {
    assets?: Asset[];
    nextPageToken?: string;
    readTime?: string;
}
