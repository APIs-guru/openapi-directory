import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3QueryInput } from "./googleclouddialogflowcxv3queryinput";
import { GoogleCloudDialogflowCxV3QueryParameters } from "./googleclouddialogflowcxv3queryparameters";



// GoogleCloudDialogflowCxV3MatchIntentRequest
/** 
 * Request of MatchIntent.
**/
export class GoogleCloudDialogflowCxV3MatchIntentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queryInput" })
  queryInput?: GoogleCloudDialogflowCxV3QueryInput;

  @SpeakeasyMetadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowCxV3QueryParameters;
}
