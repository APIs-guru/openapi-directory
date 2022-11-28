import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BoundingBox extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=left" })
  left?: number;

  @SpeakeasyMetadata({ data: "json, name=top" })
  top?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
