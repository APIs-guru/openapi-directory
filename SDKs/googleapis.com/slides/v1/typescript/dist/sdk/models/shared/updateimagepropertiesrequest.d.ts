import { SpeakeasyBase } from "../../../internal/utils";
import { ImageProperties } from "./imageproperties";
/**
 * Update the properties of an Image.
**/
export declare class UpdateImagePropertiesRequest extends SpeakeasyBase {
    fields?: string;
    imageProperties?: ImageProperties;
    objectId?: string;
}
