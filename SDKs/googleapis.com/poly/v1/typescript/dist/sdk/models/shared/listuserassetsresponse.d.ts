import { SpeakeasyBase } from "../../../internal/utils";
import { UserAsset } from "./userasset";
/**
 * A response message from a request to list.
**/
export declare class ListUserAssetsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    totalSize?: number;
    userAssets?: UserAsset[];
}
