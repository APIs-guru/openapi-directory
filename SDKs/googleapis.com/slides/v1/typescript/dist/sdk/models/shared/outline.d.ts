import { SpeakeasyBase } from "../../../internal/utils";
import { OutlineFill } from "./outlinefill";
import { Dimension } from "./dimension";
export declare enum OutlineDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED",
    Solid = "SOLID",
    Dot = "DOT",
    Dash = "DASH",
    DashDot = "DASH_DOT",
    LongDash = "LONG_DASH",
    LongDashDot = "LONG_DASH_DOT"
}
export declare enum OutlinePropertyStateEnum {
    Rendered = "RENDERED",
    NotRendered = "NOT_RENDERED",
    Inherit = "INHERIT"
}
/**
 * The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
**/
export declare class Outline extends SpeakeasyBase {
    dashStyle?: OutlineDashStyleEnum;
    outlineFill?: OutlineFill;
    propertyState?: OutlinePropertyStateEnum;
    weight?: Dimension;
}
