import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Asset } from "./asset";


// ListAssetsResponse
/** 
 * A response message from a request to list.
**/
export class ListAssetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets", elemType: shared.Asset })
  assets?: Asset[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
