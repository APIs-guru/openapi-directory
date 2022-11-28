import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";



// ListFoldersResponse
/** 
 * The ListFolders response message.
**/
export class ListFoldersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=folders", elemType: Folder })
  folders?: Folder[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
