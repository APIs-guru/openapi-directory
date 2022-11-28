import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1OutputAudioConfig } from "./googleclouddialogflowv2beta1outputaudioconfig";
import { GoogleCloudDialogflowV2beta1QueryInput } from "./googleclouddialogflowv2beta1queryinput";
import { GoogleCloudDialogflowV2beta1QueryParameters } from "./googleclouddialogflowv2beta1queryparameters";



// GoogleCloudDialogflowV2beta1DetectIntentRequest
/** 
 * The request to detect user's intent.
**/
export class GoogleCloudDialogflowV2beta1DetectIntentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputAudio" })
  inputAudio?: string;

  @SpeakeasyMetadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowV2beta1OutputAudioConfig;

  @SpeakeasyMetadata({ data: "json, name=outputAudioConfigMask" })
  outputAudioConfigMask?: string;

  @SpeakeasyMetadata({ data: "json, name=queryInput" })
  queryInput?: GoogleCloudDialogflowV2beta1QueryInput;

  @SpeakeasyMetadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowV2beta1QueryParameters;
}
