import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Folder } from "./folder";


// ListFoldersResponse
/** 
 * The ListFolders response message.
**/
export class ListFoldersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=folders", elemType: shared.Folder })
  folders?: Folder[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
