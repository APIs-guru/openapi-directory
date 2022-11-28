import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FolderInput
/** 
 * Object for creating a folder.
**/
export class FolderInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @SpeakeasyMetadata({ data: "json, name=parentPath" })
  parentPath?: string;
}
