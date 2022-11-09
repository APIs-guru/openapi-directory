import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";

export enum GoogleAppsCardV1SwitchControlControlTypeEnum {
    Switch = "SWITCH"
,    Checkbox = "CHECKBOX"
,    CheckBox = "CHECK_BOX"
}


// GoogleAppsCardV1SwitchControl
/** 
 * Either a toggle-style switch or a checkbox.
**/
export class GoogleAppsCardV1SwitchControl extends SpeakeasyBase {
  @Metadata({ data: "json, name=controlType" })
  controlType?: GoogleAppsCardV1SwitchControlControlTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=onChangeAction" })
  onChangeAction?: GoogleAppsCardV1Action;

  @Metadata({ data: "json, name=selected" })
  selected?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
