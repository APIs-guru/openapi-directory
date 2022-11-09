import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BoundingBox } from "./boundingbox";


export class RegionProposal extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingBox;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;
}
