import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1OutputAudioConfig } from "./googleclouddialogflowcxv3beta1outputaudioconfig";
import { GoogleCloudDialogflowCxV3beta1QueryInput } from "./googleclouddialogflowcxv3beta1queryinput";
import { GoogleCloudDialogflowCxV3beta1QueryParameters } from "./googleclouddialogflowcxv3beta1queryparameters";


// GoogleCloudDialogflowCxV3beta1DetectIntentRequest
/** 
 * The request to detect user's intent.
**/
export class GoogleCloudDialogflowCxV3beta1DetectIntentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;

  @Metadata({ data: "json, name=queryInput" })
  queryInput?: GoogleCloudDialogflowCxV3beta1QueryInput;

  @Metadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowCxV3beta1QueryParameters;
}
