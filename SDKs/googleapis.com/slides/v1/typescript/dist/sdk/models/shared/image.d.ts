import { SpeakeasyBase } from "../../../internal/utils";
import { ImageProperties } from "./imageproperties";
import { Placeholder } from "./placeholder";
/**
 * A PageElement kind representing an image.
**/
export declare class Image extends SpeakeasyBase {
    contentUrl?: string;
    imageProperties?: ImageProperties;
    placeholder?: Placeholder;
    sourceUrl?: string;
}
