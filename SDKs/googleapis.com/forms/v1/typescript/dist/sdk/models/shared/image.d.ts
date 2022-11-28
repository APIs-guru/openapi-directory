import { SpeakeasyBase } from "../../../internal/utils";
import { MediaProperties } from "./mediaproperties";
/**
 * Data representing an image.
**/
export declare class ImageInput extends SpeakeasyBase {
    altText?: string;
    properties?: MediaProperties;
    sourceUri?: string;
}
/**
 * Data representing an image.
**/
export declare class Image extends SpeakeasyBase {
    altText?: string;
    contentUri?: string;
    properties?: MediaProperties;
    sourceUri?: string;
}
