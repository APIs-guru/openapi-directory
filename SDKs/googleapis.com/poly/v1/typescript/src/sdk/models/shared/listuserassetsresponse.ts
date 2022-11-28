import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserAsset } from "./userasset";



// ListUserAssetsResponse
/** 
 * A response message from a request to list.
**/
export class ListUserAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;

  @SpeakeasyMetadata({ data: "json, name=userAssets", elemType: UserAsset })
  userAssets?: UserAsset[];
}
