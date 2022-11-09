import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Asset } from "./asset";


// ListLikedAssetsResponse
/** 
 * A response message from a request to list.
**/
export class ListLikedAssetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: shared.Asset })
  assets?: Asset[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
