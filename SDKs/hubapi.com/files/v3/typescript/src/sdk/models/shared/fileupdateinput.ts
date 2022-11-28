import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FileUpdateInputAccessEnum {
    PublicIndexable = "PUBLIC_INDEXABLE",
    PublicNotIndexable = "PUBLIC_NOT_INDEXABLE",
    HiddenIndexable = "HIDDEN_INDEXABLE",
    HiddenNotIndexable = "HIDDEN_NOT_INDEXABLE",
    HiddenPrivate = "HIDDEN_PRIVATE",
    Private = "PRIVATE"
}


// FileUpdateInput
/** 
 * Object for updating files.
**/
export class FileUpdateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: FileUpdateInputAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=isUsableInContent" })
  isUsableInContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @SpeakeasyMetadata({ data: "json, name=parentFolderPath" })
  parentFolderPath?: string;
}
