import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentFields } from "./attachmentfields";



export class Attachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachment" })
  attachment?: AttachmentFields;
}
