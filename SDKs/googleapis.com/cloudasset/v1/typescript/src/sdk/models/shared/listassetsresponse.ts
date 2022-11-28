import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";



// ListAssetsResponse
/** 
 * ListAssets response.
**/
export class ListAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets", elemType: Asset })
  assets?: Asset[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;
}
