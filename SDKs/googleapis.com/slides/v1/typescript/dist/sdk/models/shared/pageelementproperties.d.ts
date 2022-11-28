import { SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";
import { AffineTransform } from "./affinetransform";
/**
 * Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged.
**/
export declare class PageElementProperties extends SpeakeasyBase {
    pageObjectId?: string;
    size?: Size;
    transform?: AffineTransform;
}
