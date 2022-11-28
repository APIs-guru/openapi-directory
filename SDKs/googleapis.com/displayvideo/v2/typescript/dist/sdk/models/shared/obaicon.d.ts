import { SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";
export declare enum ObaIconPositionEnum {
    ObaIconPositionUnspecified = "OBA_ICON_POSITION_UNSPECIFIED",
    ObaIconPositionUpperRight = "OBA_ICON_POSITION_UPPER_RIGHT",
    ObaIconPositionUpperLeft = "OBA_ICON_POSITION_UPPER_LEFT",
    ObaIconPositionLowerRight = "OBA_ICON_POSITION_LOWER_RIGHT",
    ObaIconPositionLowerLeft = "OBA_ICON_POSITION_LOWER_LEFT"
}
/**
 * OBA Icon for a Creative
**/
export declare class ObaIcon extends SpeakeasyBase {
    clickTrackingUrl?: string;
    dimensions?: Dimensions;
    landingPageUrl?: string;
    position?: ObaIconPositionEnum;
    program?: string;
    resourceMimeType?: string;
    resourceUrl?: string;
    viewTrackingUrl?: string;
}
