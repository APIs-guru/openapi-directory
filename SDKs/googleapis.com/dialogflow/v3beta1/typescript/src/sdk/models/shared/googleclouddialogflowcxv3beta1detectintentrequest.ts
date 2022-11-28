import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1OutputAudioConfig } from "./googleclouddialogflowcxv3beta1outputaudioconfig";
import { GoogleCloudDialogflowCxV3beta1QueryInput } from "./googleclouddialogflowcxv3beta1queryinput";
import { GoogleCloudDialogflowCxV3beta1QueryParameters } from "./googleclouddialogflowcxv3beta1queryparameters";



// GoogleCloudDialogflowCxV3beta1DetectIntentRequest
/** 
 * The request to detect user's intent.
**/
export class GoogleCloudDialogflowCxV3beta1DetectIntentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;

  @SpeakeasyMetadata({ data: "json, name=queryInput" })
  queryInput?: GoogleCloudDialogflowCxV3beta1QueryInput;

  @SpeakeasyMetadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowCxV3beta1QueryParameters;
}
