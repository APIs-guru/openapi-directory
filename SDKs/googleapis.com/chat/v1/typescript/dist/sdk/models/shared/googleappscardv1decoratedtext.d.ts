import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Button } from "./googleappscardv1button";
import { GoogleAppsCardV1Icon } from "./googleappscardv1icon";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";
import { GoogleAppsCardV1SwitchControl } from "./googleappscardv1switchcontrol";
/**
 * A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget or a button after the text.
**/
export declare class GoogleAppsCardV1DecoratedText extends SpeakeasyBase {
    bottomLabel?: string;
    button?: GoogleAppsCardV1Button;
    endIcon?: GoogleAppsCardV1Icon;
    icon?: GoogleAppsCardV1Icon;
    onClick?: GoogleAppsCardV1OnClick;
    startIcon?: GoogleAppsCardV1Icon;
    switchControl?: GoogleAppsCardV1SwitchControl;
    text?: string;
    topLabel?: string;
    wrapText?: boolean;
}
