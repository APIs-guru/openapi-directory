import { SpeakeasyBase } from "../../../internal/utils";
import { SlideProperties } from "./slideproperties";
/**
 * Updates the properties of a Slide.
**/
export declare class UpdateSlidePropertiesRequest extends SpeakeasyBase {
    fields?: string;
    objectId?: string;
    slideProperties?: SlideProperties;
}
