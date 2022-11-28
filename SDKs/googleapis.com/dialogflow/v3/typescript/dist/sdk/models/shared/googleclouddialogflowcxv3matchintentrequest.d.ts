import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3QueryInput } from "./googleclouddialogflowcxv3queryinput";
import { GoogleCloudDialogflowCxV3QueryParameters } from "./googleclouddialogflowcxv3queryparameters";
/**
 * Request of MatchIntent.
**/
export declare class GoogleCloudDialogflowCxV3MatchIntentRequest extends SpeakeasyBase {
    queryInput?: GoogleCloudDialogflowCxV3QueryInput;
    queryParams?: GoogleCloudDialogflowCxV3QueryParameters;
}
