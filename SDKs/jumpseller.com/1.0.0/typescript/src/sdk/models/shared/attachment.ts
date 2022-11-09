import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttachmentFields } from "./attachmentfields";


export class Attachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachment" })
  attachment?: AttachmentFields;
}
