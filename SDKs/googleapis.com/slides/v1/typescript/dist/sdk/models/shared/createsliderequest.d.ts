import { SpeakeasyBase } from "../../../internal/utils";
import { LayoutPlaceholderIdMapping } from "./layoutplaceholderidmapping";
import { LayoutReference } from "./layoutreference";
/**
 * Creates a slide.
**/
export declare class CreateSlideRequest extends SpeakeasyBase {
    insertionIndex?: number;
    objectId?: string;
    placeholderIdMappings?: LayoutPlaceholderIdMapping[];
    slideLayoutReference?: LayoutReference;
}
