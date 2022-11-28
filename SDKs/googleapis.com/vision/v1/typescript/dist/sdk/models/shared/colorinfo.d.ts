import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
/**
 * Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
**/
export declare class ColorInfo extends SpeakeasyBase {
    color?: Color;
    pixelFraction?: number;
    score?: number;
}
