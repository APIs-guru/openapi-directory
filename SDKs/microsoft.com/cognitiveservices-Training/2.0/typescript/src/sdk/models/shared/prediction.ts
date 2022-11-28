import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";



export class Prediction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingBox;

  @SpeakeasyMetadata({ data: "json, name=probability" })
  probability?: number;

  @SpeakeasyMetadata({ data: "json, name=tagId" })
  tagId?: string;

  @SpeakeasyMetadata({ data: "json, name=tagName" })
  tagName?: string;
}
