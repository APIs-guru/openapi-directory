import { SpeakeasyBase } from "../../../internal/utils";
import { SolidFill } from "./solidfill";
export declare enum ShapeBackgroundFillPropertyStateEnum {
    Rendered = "RENDERED",
    NotRendered = "NOT_RENDERED",
    Inherit = "INHERIT"
}
/**
 * The shape background fill.
**/
export declare class ShapeBackgroundFill extends SpeakeasyBase {
    propertyState?: ShapeBackgroundFillPropertyStateEnum;
    solidFill?: SolidFill;
}
