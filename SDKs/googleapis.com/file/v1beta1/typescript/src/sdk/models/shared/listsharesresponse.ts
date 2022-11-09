import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Share } from "./share";


// ListSharesResponse
/** 
 * ListSharesResponse is the result of ListSharesRequest.
**/
export class ListSharesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=shares", elemType: shared.Share })
  shares?: Share[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
