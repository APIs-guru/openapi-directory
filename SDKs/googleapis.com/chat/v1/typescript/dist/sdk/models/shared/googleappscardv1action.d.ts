import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1ActionParameter } from "./googleappscardv1actionparameter";
export declare enum GoogleAppsCardV1ActionInteractionEnum {
    InteractionUnspecified = "INTERACTION_UNSPECIFIED",
    OpenDialog = "OPEN_DIALOG"
}
export declare enum GoogleAppsCardV1ActionLoadIndicatorEnum {
    Spinner = "SPINNER",
    None = "NONE"
}
/**
 * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
**/
export declare class GoogleAppsCardV1Action extends SpeakeasyBase {
    function?: string;
    interaction?: GoogleAppsCardV1ActionInteractionEnum;
    loadIndicator?: GoogleAppsCardV1ActionLoadIndicatorEnum;
    parameters?: GoogleAppsCardV1ActionParameter[];
    persistValues?: boolean;
}
