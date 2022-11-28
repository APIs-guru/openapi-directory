import { SpeakeasyBase } from "../../../internal/utils";
import { OptionalColor } from "./optionalcolor";
import { Dimension } from "./dimension";
export declare enum EmbeddedObjectBorderDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED",
    Solid = "SOLID",
    Dot = "DOT",
    Dash = "DASH"
}
export declare enum EmbeddedObjectBorderPropertyStateEnum {
    Rendered = "RENDERED",
    NotRendered = "NOT_RENDERED"
}
/**
 * A border around an EmbeddedObject.
**/
export declare class EmbeddedObjectBorder extends SpeakeasyBase {
    color?: OptionalColor;
    dashStyle?: EmbeddedObjectBorderDashStyleEnum;
    propertyState?: EmbeddedObjectBorderPropertyStateEnum;
    width?: Dimension;
}
