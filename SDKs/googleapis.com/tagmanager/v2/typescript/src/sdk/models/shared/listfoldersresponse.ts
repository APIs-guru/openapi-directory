import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";



// ListFoldersResponse
/** 
 * List Folders Response.
**/
export class ListFoldersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=folder", elemType: Folder })
  folder?: Folder[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
