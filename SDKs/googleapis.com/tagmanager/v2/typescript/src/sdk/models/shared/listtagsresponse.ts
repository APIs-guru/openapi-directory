import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// ListTagsResponse
/** 
 * List Tags Response.
**/
export class ListTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tag", elemType: shared.Tag })
  tag?: Tag[];
}
