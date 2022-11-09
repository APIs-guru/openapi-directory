import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BoundingBox } from "./boundingbox";


export class Prediction extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingBox;

  @Metadata({ data: "json, name=probability" })
  probability?: number;

  @Metadata({ data: "json, name=tagId" })
  tagId?: string;

  @Metadata({ data: "json, name=tagName" })
  tagName?: string;
}
