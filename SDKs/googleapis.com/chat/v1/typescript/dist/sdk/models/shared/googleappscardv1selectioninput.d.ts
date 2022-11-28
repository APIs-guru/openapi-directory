import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1SelectionItem } from "./googleappscardv1selectionitem";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
export declare enum GoogleAppsCardV1SelectionInputTypeEnum {
    CheckBox = "CHECK_BOX",
    RadioButton = "RADIO_BUTTON",
    Switch = "SWITCH",
    Dropdown = "DROPDOWN"
}
/**
 * A widget that creates a UI item with options for users to select. For example, a dropdown menu or check list. Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). When you need to collect data from users that matches options you set, use a selection input. To collect abstract data from users, use the text input widget instead. Only supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) coming soon.
**/
export declare class GoogleAppsCardV1SelectionInput extends SpeakeasyBase {
    items?: GoogleAppsCardV1SelectionItem[];
    label?: string;
    name?: string;
    onChangeAction?: GoogleAppsCardV1Action;
    type?: GoogleAppsCardV1SelectionInputTypeEnum;
}
