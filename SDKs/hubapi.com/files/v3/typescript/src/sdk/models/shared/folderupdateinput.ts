import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FolderUpdateInput
/** 
 * Object for updating folders.
**/
export class FolderUpdateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentFolderId" })
  parentFolderId?: number;
}
