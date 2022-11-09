import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3QueryInput } from "./googleclouddialogflowcxv3queryinput";
import { GoogleCloudDialogflowCxV3QueryParameters } from "./googleclouddialogflowcxv3queryparameters";


// GoogleCloudDialogflowCxV3MatchIntentRequest
/** 
 * Request of MatchIntent.
**/
export class GoogleCloudDialogflowCxV3MatchIntentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=queryInput" })
  queryInput?: GoogleCloudDialogflowCxV3QueryInput;

  @Metadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowCxV3QueryParameters;
}
