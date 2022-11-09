import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


// ListTagsResponse
/** 
 * List Tags Response.
**/
export class ListTagsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
