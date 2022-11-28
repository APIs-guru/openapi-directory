import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Folder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived: boolean;

  @SpeakeasyMetadata({ data: "json, name=archivedAt" })
  archivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt: Date;
}
