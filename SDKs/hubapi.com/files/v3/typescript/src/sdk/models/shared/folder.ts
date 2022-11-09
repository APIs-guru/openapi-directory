import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Folder extends SpeakeasyBase {
  @Metadata({ data: "json, name=archived" })
  archived: boolean;

  @Metadata({ data: "json, name=archivedAt" })
  archivedAt?: Date;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: Date;
}
