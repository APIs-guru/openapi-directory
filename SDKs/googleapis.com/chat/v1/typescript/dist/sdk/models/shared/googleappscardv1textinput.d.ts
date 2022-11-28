import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
import { GoogleAppsCardV1Suggestions } from "./googleappscardv1suggestions";
export declare enum GoogleAppsCardV1TextInputTypeEnum {
    SingleLine = "SINGLE_LINE",
    MultipleLine = "MULTIPLE_LINE"
}
/**
 * A field in which users can enter text. Supports suggestions and on-change actions. Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). When you need to collect abstract data from users, use a text input. To collect defined data from users, use the selection input widget instead. Only supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) coming soon.
**/
export declare class GoogleAppsCardV1TextInput extends SpeakeasyBase {
    autoCompleteAction?: GoogleAppsCardV1Action;
    hintText?: string;
    initialSuggestions?: GoogleAppsCardV1Suggestions;
    label?: string;
    name?: string;
    onChangeAction?: GoogleAppsCardV1Action;
    type?: GoogleAppsCardV1TextInputTypeEnum;
    value?: string;
}
