import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";



// ListLikedAssetsResponse
/** 
 * A response message from a request to list.
**/
export class ListLikedAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: Asset })
  assets?: Asset[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
