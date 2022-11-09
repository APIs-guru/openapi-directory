import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImageTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=tagId" })
  tagId?: string;

  @Metadata({ data: "json, name=tagName" })
  tagName?: string;
}
