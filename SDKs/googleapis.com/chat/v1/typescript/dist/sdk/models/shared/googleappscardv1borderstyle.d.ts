import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
export declare enum GoogleAppsCardV1BorderStyleTypeEnum {
    BorderTypeUnspecified = "BORDER_TYPE_UNSPECIFIED",
    NoBorder = "NO_BORDER",
    Stroke = "STROKE"
}
/**
 * Represents the complete border style applied to items in a widget.
**/
export declare class GoogleAppsCardV1BorderStyle extends SpeakeasyBase {
    cornerRadius?: number;
    strokeColor?: Color;
    type?: GoogleAppsCardV1BorderStyleTypeEnum;
}
