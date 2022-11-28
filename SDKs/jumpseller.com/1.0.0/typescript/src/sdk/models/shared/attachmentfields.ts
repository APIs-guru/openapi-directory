import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttachmentFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
