import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageRegion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=left" })
  left?: number;

  @SpeakeasyMetadata({ data: "json, name=regionId" })
  regionId?: string;

  @SpeakeasyMetadata({ data: "json, name=tagId" })
  tagId?: string;

  @SpeakeasyMetadata({ data: "json, name=tagName" })
  tagName?: string;

  @SpeakeasyMetadata({ data: "json, name=top" })
  top?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
