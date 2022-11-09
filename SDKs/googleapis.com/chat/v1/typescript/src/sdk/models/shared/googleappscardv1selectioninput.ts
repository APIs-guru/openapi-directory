import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsCardV1SelectionItem } from "./googleappscardv1selectionitem";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";

export enum GoogleAppsCardV1SelectionInputTypeEnum {
    CheckBox = "CHECK_BOX"
,    RadioButton = "RADIO_BUTTON"
,    Switch = "SWITCH"
,    Dropdown = "DROPDOWN"
}


// GoogleAppsCardV1SelectionInput
/** 
 * A widget that creates a UI item with options for users to select. For example, a dropdown menu.
**/
export class GoogleAppsCardV1SelectionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.GoogleAppsCardV1SelectionItem })
  items?: GoogleAppsCardV1SelectionItem[];

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=onChangeAction" })
  onChangeAction?: GoogleAppsCardV1Action;

  @Metadata({ data: "json, name=type" })
  type?: GoogleAppsCardV1SelectionInputTypeEnum;
}
