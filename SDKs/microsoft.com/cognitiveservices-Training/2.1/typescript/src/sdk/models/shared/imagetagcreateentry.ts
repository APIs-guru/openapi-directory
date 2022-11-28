import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageTagCreateEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageId" })
  imageId?: string;

  @SpeakeasyMetadata({ data: "json, name=tagId" })
  tagId?: string;
}
