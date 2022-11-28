import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=tagId" })
  tagId?: string;

  @SpeakeasyMetadata({ data: "json, name=tagName" })
  tagName?: string;
}
