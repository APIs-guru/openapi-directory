import { SpeakeasyBase } from "../../../internal/utils";
import { AffineTransform } from "./affinetransform";
export declare enum UpdatePageElementTransformRequestApplyModeEnum {
    ApplyModeUnspecified = "APPLY_MODE_UNSPECIFIED",
    Relative = "RELATIVE",
    Absolute = "ABSOLUTE"
}
/**
 * Updates the transform of a page element. Updating the transform of a group will change the absolute transform of the page elements in that group, which can change their visual appearance. See the documentation for PageElement.transform for more details.
**/
export declare class UpdatePageElementTransformRequest extends SpeakeasyBase {
    applyMode?: UpdatePageElementTransformRequestApplyModeEnum;
    objectId?: string;
    transform?: AffineTransform;
}
