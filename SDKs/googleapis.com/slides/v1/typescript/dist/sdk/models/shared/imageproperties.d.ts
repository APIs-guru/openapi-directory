import { SpeakeasyBase } from "../../../internal/utils";
import { CropProperties } from "./cropproperties";
import { Link } from "./link";
import { Outline } from "./outline";
import { Recolor } from "./recolor";
import { Shadow } from "./shadow";
/**
 * The properties of the Image.
**/
export declare class ImageProperties extends SpeakeasyBase {
    brightness?: number;
    contrast?: number;
    cropProperties?: CropProperties;
    link?: Link;
    outline?: Outline;
    recolor?: Recolor;
    shadow?: Shadow;
    transparency?: number;
}
