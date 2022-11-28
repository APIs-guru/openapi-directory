import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
export declare enum GoogleAppsCardV1SwitchControlControlTypeEnum {
    Switch = "SWITCH",
    Checkbox = "CHECKBOX",
    CheckBox = "CHECK_BOX"
}
/**
 * Either a toggle-style switch or a checkbox inside a `decoratedText` widget. Only supported on the `decoratedText` widget. Currently supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) is coming soon.
**/
export declare class GoogleAppsCardV1SwitchControl extends SpeakeasyBase {
    controlType?: GoogleAppsCardV1SwitchControlControlTypeEnum;
    name?: string;
    onChangeAction?: GoogleAppsCardV1Action;
    selected?: boolean;
    value?: string;
}
