import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagBinding } from "./tagbinding";


// ListTagBindingsResponse
/** 
 * The ListTagBindings response.
**/
export class ListTagBindingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tagBindings", elemType: shared.TagBinding })
  tagBindings?: TagBinding[];
}
