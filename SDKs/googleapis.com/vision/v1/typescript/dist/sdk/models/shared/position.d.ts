import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
**/
export declare class Position extends SpeakeasyBase {
    x?: number;
    y?: number;
    z?: number;
}
