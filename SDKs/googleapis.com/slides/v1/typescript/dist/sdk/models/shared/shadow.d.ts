import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { OpaqueColor } from "./opaquecolor";
import { AffineTransform } from "./affinetransform";
export declare enum ShadowAlignmentEnum {
    RectanglePositionUnspecified = "RECTANGLE_POSITION_UNSPECIFIED",
    TopLeft = "TOP_LEFT",
    TopCenter = "TOP_CENTER",
    TopRight = "TOP_RIGHT",
    LeftCenter = "LEFT_CENTER",
    Center = "CENTER",
    RightCenter = "RIGHT_CENTER",
    BottomLeft = "BOTTOM_LEFT",
    BottomCenter = "BOTTOM_CENTER",
    BottomRight = "BOTTOM_RIGHT"
}
export declare enum ShadowPropertyStateEnum {
    Rendered = "RENDERED",
    NotRendered = "NOT_RENDERED",
    Inherit = "INHERIT"
}
export declare enum ShadowTypeEnum {
    ShadowTypeUnspecified = "SHADOW_TYPE_UNSPECIFIED",
    Outer = "OUTER"
}
/**
 * The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
**/
export declare class Shadow extends SpeakeasyBase {
    alignment?: ShadowAlignmentEnum;
    alpha?: number;
    blurRadius?: Dimension;
    color?: OpaqueColor;
    propertyState?: ShadowPropertyStateEnum;
    rotateWithShape?: boolean;
    transform?: AffineTransform;
    type?: ShadowTypeEnum;
}
