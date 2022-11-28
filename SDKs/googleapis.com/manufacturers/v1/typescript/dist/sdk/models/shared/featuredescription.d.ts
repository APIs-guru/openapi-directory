import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
/**
 * A feature description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.
**/
export declare class FeatureDescription extends SpeakeasyBase {
    headline?: string;
    image?: Image;
    text?: string;
}
