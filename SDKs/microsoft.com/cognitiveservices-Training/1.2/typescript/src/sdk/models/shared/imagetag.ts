import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImageTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Created" })
  created?: Date;

  @Metadata({ data: "json, name=TagId" })
  tagId?: string;
}
