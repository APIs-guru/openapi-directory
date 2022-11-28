import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileId" })
  fileId?: string;

  @SpeakeasyMetadata({ data: "json, name=fileUrl" })
  fileUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=iconLink" })
  iconLink?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
