import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserAsset } from "./userasset";


// ListUserAssetsResponse
/** 
 * A response message from a request to list.
**/
export class ListUserAssetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;

  @Metadata({ data: "json, name=userAssets", elemType: shared.UserAsset })
  userAssets?: UserAsset[];
}
