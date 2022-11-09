import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileId" })
  fileId?: string;

  @Metadata({ data: "json, name=fileUrl" })
  fileUrl?: string;

  @Metadata({ data: "json, name=iconLink" })
  iconLink?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
