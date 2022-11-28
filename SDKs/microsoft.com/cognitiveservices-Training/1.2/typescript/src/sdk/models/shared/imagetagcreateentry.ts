import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageTagCreateEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageId" })
  imageId?: string;

  @SpeakeasyMetadata({ data: "json, name=TagId" })
  tagId?: string;
}
