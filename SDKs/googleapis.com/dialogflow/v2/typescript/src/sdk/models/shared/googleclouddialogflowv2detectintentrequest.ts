import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2OutputAudioConfig } from "./googleclouddialogflowv2outputaudioconfig";
import { GoogleCloudDialogflowV2QueryInput } from "./googleclouddialogflowv2queryinput";
import { GoogleCloudDialogflowV2QueryParameters } from "./googleclouddialogflowv2queryparameters";



// GoogleCloudDialogflowV2DetectIntentRequest
/** 
 * The request to detect user's intent.
**/
export class GoogleCloudDialogflowV2DetectIntentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputAudio" })
  inputAudio?: string;

  @SpeakeasyMetadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;

  @SpeakeasyMetadata({ data: "json, name=outputAudioConfigMask" })
  outputAudioConfigMask?: string;

  @SpeakeasyMetadata({ data: "json, name=queryInput" })
  queryInput?: GoogleCloudDialogflowV2QueryInput;

  @SpeakeasyMetadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowV2QueryParameters;
}
