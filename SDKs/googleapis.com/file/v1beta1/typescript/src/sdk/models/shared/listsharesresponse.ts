import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Share } from "./share";



// ListSharesResponse
/** 
 * ListSharesResponse is the result of ListSharesRequest.
**/
export class ListSharesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=shares", elemType: Share })
  shares?: Share[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
