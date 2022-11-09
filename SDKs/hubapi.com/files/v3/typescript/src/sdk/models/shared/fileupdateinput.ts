import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FileUpdateInputAccessEnum {
    PublicIndexable = "PUBLIC_INDEXABLE"
,    PublicNotIndexable = "PUBLIC_NOT_INDEXABLE"
,    HiddenIndexable = "HIDDEN_INDEXABLE"
,    HiddenNotIndexable = "HIDDEN_NOT_INDEXABLE"
,    HiddenPrivate = "HIDDEN_PRIVATE"
,    Private = "PRIVATE"
}


// FileUpdateInput
/** 
 * Object for updating files.
**/
export class FileUpdateInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: FileUpdateInputAccessEnum;

  @Metadata({ data: "json, name=isUsableInContent" })
  isUsableInContent?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @Metadata({ data: "json, name=parentFolderPath" })
  parentFolderPath?: string;
}
