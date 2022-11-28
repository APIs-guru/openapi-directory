import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";



export class RegionProposal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingBox;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;
}
