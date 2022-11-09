import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListAssetsResult } from "./listassetsresult";


// ListAssetsResponse
/** 
 * Response message for listing assets.
**/
export class ListAssetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=listAssetsResults", elemType: shared.ListAssetsResult })
  listAssetsResults?: ListAssetsResult[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
