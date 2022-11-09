import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1QueryInput } from "./googleclouddialogflowcxv3beta1queryinput";
import { GoogleCloudDialogflowCxV3beta1QueryParameters } from "./googleclouddialogflowcxv3beta1queryparameters";


// GoogleCloudDialogflowCxV3beta1MatchIntentRequest
/** 
 * Request of MatchIntent.
**/
export class GoogleCloudDialogflowCxV3beta1MatchIntentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=queryInput" })
  queryInput?: GoogleCloudDialogflowCxV3beta1QueryInput;

  @Metadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowCxV3beta1QueryParameters;
}
