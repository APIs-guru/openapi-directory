import { SpeakeasyBase } from "../../../internal/utils";
import { SolidFill } from "./solidfill";
import { StretchedPictureFill } from "./stretchedpicturefill";
export declare enum PageBackgroundFillPropertyStateEnum {
    Rendered = "RENDERED",
    NotRendered = "NOT_RENDERED",
    Inherit = "INHERIT"
}
/**
 * The page background fill.
**/
export declare class PageBackgroundFill extends SpeakeasyBase {
    propertyState?: PageBackgroundFillPropertyStateEnum;
    solidFill?: SolidFill;
    stretchedPictureFill?: StretchedPictureFill;
}
