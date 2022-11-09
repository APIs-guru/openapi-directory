import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Folder } from "./folder";


// ListFoldersResponse
/** 
 * List Folders Response.
**/
export class ListFoldersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=folders", elemType: shared.Folder })
  folders?: Folder[];
}
