import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListAssetsResult } from "./listassetsresult";



// ListAssetsResponse
/** 
 * Response message for listing assets.
**/
export class ListAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listAssetsResults", elemType: ListAssetsResult })
  listAssetsResults?: ListAssetsResult[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
