import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FileAccessEnum {
    PublicIndexable = "PUBLIC_INDEXABLE",
    PublicNotIndexable = "PUBLIC_NOT_INDEXABLE",
    HiddenIndexable = "HIDDEN_INDEXABLE",
    HiddenNotIndexable = "HIDDEN_NOT_INDEXABLE",
    HiddenPrivate = "HIDDEN_PRIVATE",
    Private = "PRIVATE"
}


// File
/** 
 * File
**/
export class File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access: FileAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived: boolean;

  @SpeakeasyMetadata({ data: "json, name=archivedAt" })
  archivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=defaultHostingUrl" })
  defaultHostingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: string;

  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isUsableInContent" })
  isUsableInContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
