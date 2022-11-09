import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FolderInput
/** 
 * Object for creating a folder.
**/
export class FolderInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @Metadata({ data: "json, name=parentPath" })
  parentPath?: string;
}
