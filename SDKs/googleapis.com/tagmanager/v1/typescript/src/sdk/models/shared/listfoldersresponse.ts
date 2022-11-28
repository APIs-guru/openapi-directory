import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";



// ListFoldersResponse
/** 
 * List Folders Response.
**/
export class ListFoldersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=folders", elemType: Folder })
  folders?: Folder[];
}
