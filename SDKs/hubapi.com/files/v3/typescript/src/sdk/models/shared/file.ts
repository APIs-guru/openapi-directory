import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FileAccessEnum {
    PublicIndexable = "PUBLIC_INDEXABLE"
,    PublicNotIndexable = "PUBLIC_NOT_INDEXABLE"
,    HiddenIndexable = "HIDDEN_INDEXABLE"
,    HiddenNotIndexable = "HIDDEN_NOT_INDEXABLE"
,    HiddenPrivate = "HIDDEN_PRIVATE"
,    Private = "PRIVATE"
}


// File
/** 
 * File
**/
export class File extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access: FileAccessEnum;

  @Metadata({ data: "json, name=archived" })
  archived: boolean;

  @Metadata({ data: "json, name=archivedAt" })
  archivedAt?: Date;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=defaultHostingUrl" })
  defaultHostingUrl?: string;

  @Metadata({ data: "json, name=encoding" })
  encoding?: string;

  @Metadata({ data: "json, name=extension" })
  extension?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=isUsableInContent" })
  isUsableInContent?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
