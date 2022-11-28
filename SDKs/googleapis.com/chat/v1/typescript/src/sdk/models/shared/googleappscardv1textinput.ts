import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
import { GoogleAppsCardV1Suggestions } from "./googleappscardv1suggestions";


export enum GoogleAppsCardV1TextInputTypeEnum {
    SingleLine = "SINGLE_LINE",
    MultipleLine = "MULTIPLE_LINE"
}


// GoogleAppsCardV1TextInput
/** 
 * A field in which users can enter text. Supports suggestions and on-change actions. Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). When you need to collect abstract data from users, use a text input. To collect defined data from users, use the selection input widget instead. Only supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) coming soon.
**/
export class GoogleAppsCardV1TextInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoCompleteAction" })
  autoCompleteAction?: GoogleAppsCardV1Action;

  @SpeakeasyMetadata({ data: "json, name=hintText" })
  hintText?: string;

  @SpeakeasyMetadata({ data: "json, name=initialSuggestions" })
  initialSuggestions?: GoogleAppsCardV1Suggestions;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=onChangeAction" })
  onChangeAction?: GoogleAppsCardV1Action;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleAppsCardV1TextInputTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
