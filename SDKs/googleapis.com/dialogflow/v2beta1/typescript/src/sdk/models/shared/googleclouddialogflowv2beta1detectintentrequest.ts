import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1OutputAudioConfig } from "./googleclouddialogflowv2beta1outputaudioconfig";
import { GoogleCloudDialogflowV2beta1QueryInput } from "./googleclouddialogflowv2beta1queryinput";
import { GoogleCloudDialogflowV2beta1QueryParameters } from "./googleclouddialogflowv2beta1queryparameters";


// GoogleCloudDialogflowV2beta1DetectIntentRequest
/** 
 * The request to detect user's intent.
**/
export class GoogleCloudDialogflowV2beta1DetectIntentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputAudio" })
  inputAudio?: string;

  @Metadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowV2beta1OutputAudioConfig;

  @Metadata({ data: "json, name=outputAudioConfigMask" })
  outputAudioConfigMask?: string;

  @Metadata({ data: "json, name=queryInput" })
  queryInput?: GoogleCloudDialogflowV2beta1QueryInput;

  @Metadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowV2beta1QueryParameters;
}
