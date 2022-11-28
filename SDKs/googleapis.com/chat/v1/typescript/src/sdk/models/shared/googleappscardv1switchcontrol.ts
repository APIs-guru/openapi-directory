import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";


export enum GoogleAppsCardV1SwitchControlControlTypeEnum {
    Switch = "SWITCH",
    Checkbox = "CHECKBOX",
    CheckBox = "CHECK_BOX"
}


// GoogleAppsCardV1SwitchControl
/** 
 * Either a toggle-style switch or a checkbox inside a `decoratedText` widget. Only supported on the `decoratedText` widget. Currently supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) is coming soon.
**/
export class GoogleAppsCardV1SwitchControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controlType" })
  controlType?: GoogleAppsCardV1SwitchControlControlTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=onChangeAction" })
  onChangeAction?: GoogleAppsCardV1Action;

  @SpeakeasyMetadata({ data: "json, name=selected" })
  selected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
