import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FolderUpdateInput
/** 
 * Object for updating folders.
**/
export class FolderUpdateInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentFolderId" })
  parentFolderId?: number;
}
