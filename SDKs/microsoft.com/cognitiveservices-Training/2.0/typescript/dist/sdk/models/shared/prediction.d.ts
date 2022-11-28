import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
export declare class Prediction extends SpeakeasyBase {
    boundingBox?: BoundingBox;
    probability?: number;
    tagId?: string;
    tagName?: string;
}
