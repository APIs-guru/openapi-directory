import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1ActionParameter } from "./googleappscardv1actionparameter";


export enum GoogleAppsCardV1ActionInteractionEnum {
    InteractionUnspecified = "INTERACTION_UNSPECIFIED",
    OpenDialog = "OPEN_DIALOG"
}

export enum GoogleAppsCardV1ActionLoadIndicatorEnum {
    Spinner = "SPINNER",
    None = "NONE"
}


// GoogleAppsCardV1Action
/** 
 * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
**/
export class GoogleAppsCardV1Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=function" })
  function?: string;

  @SpeakeasyMetadata({ data: "json, name=interaction" })
  interaction?: GoogleAppsCardV1ActionInteractionEnum;

  @SpeakeasyMetadata({ data: "json, name=loadIndicator" })
  loadIndicator?: GoogleAppsCardV1ActionLoadIndicatorEnum;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleAppsCardV1ActionParameter })
  parameters?: GoogleAppsCardV1ActionParameter[];

  @SpeakeasyMetadata({ data: "json, name=persistValues" })
  persistValues?: boolean;
}
