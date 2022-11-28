import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";



// SearchFoldersResponse
/** 
 * The response message for searching folders.
**/
export class SearchFoldersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=folders", elemType: Folder })
  folders?: Folder[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
