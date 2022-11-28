import { SpeakeasyBase } from "../../../internal/utils";
import { CropProperties } from "./cropproperties";
/**
 * The properties of an image.
**/
export declare class ImageProperties extends SpeakeasyBase {
    angle?: number;
    brightness?: number;
    contentUri?: string;
    contrast?: number;
    cropProperties?: CropProperties;
    sourceUri?: string;
    transparency?: number;
}
