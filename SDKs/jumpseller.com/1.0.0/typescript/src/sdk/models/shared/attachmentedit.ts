import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttachmentEditFields } from "./attachmenteditfields";


export class AttachmentEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachment" })
  attachment?: AttachmentEditFields;
}
