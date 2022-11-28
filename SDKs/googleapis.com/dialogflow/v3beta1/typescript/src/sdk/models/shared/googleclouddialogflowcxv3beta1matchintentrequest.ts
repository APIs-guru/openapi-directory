import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1QueryInput } from "./googleclouddialogflowcxv3beta1queryinput";
import { GoogleCloudDialogflowCxV3beta1QueryParameters } from "./googleclouddialogflowcxv3beta1queryparameters";



// GoogleCloudDialogflowCxV3beta1MatchIntentRequest
/** 
 * Request of MatchIntent.
**/
export class GoogleCloudDialogflowCxV3beta1MatchIntentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queryInput" })
  queryInput?: GoogleCloudDialogflowCxV3beta1QueryInput;

  @SpeakeasyMetadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowCxV3beta1QueryParameters;
}
