import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentEditFields } from "./attachmenteditfields";



export class AttachmentEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachment" })
  attachment?: AttachmentEditFields;
}
