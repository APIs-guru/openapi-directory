import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { GoogleAppsCardV1Icon } from "./googleappscardv1icon";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";
/**
 * A text, icon, or text + icon button that users can click. To make an image a clickable button, specify an Image (not an ImageComponent) and set an `onClick` action.
**/
export declare class GoogleAppsCardV1Button extends SpeakeasyBase {
    altText?: string;
    color?: Color;
    disabled?: boolean;
    icon?: GoogleAppsCardV1Icon;
    onClick?: GoogleAppsCardV1OnClick;
    text?: string;
}
