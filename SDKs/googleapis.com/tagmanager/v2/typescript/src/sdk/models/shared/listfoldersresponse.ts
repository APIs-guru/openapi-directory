import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Folder } from "./folder";


// ListFoldersResponse
/** 
 * List Folders Response.
**/
export class ListFoldersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=folder", elemType: shared.Folder })
  folder?: Folder[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
