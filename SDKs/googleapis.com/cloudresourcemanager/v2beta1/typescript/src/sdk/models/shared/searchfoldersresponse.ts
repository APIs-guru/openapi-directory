import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Folder } from "./folder";


// SearchFoldersResponse
/** 
 * The response message for searching folders.
**/
export class SearchFoldersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=folders", elemType: shared.Folder })
  folders?: Folder[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
