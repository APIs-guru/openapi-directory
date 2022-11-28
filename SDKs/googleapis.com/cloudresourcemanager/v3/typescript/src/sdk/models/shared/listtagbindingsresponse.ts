import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagBinding } from "./tagbinding";



// ListTagBindingsResponse
/** 
 * The ListTagBindings response.
**/
export class ListTagBindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tagBindings", elemType: TagBinding })
  tagBindings?: TagBinding[];
}
