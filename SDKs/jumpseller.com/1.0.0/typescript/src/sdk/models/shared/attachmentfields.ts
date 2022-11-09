import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AttachmentFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
