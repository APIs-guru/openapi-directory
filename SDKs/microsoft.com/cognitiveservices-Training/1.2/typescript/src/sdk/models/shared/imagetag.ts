import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=TagId" })
  tagId?: string;
}
