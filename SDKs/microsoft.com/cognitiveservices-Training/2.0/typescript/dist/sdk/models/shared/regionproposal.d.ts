import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
export declare class RegionProposal extends SpeakeasyBase {
    boundingBox?: BoundingBox;
    confidence?: number;
}
