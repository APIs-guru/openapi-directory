import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2OutputAudioConfig } from "./googleclouddialogflowv2outputaudioconfig";
import { GoogleCloudDialogflowV2QueryInput } from "./googleclouddialogflowv2queryinput";
import { GoogleCloudDialogflowV2QueryParameters } from "./googleclouddialogflowv2queryparameters";


// GoogleCloudDialogflowV2DetectIntentRequest
/** 
 * The request to detect user's intent.
**/
export class GoogleCloudDialogflowV2DetectIntentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputAudio" })
  inputAudio?: string;

  @Metadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowV2OutputAudioConfig;

  @Metadata({ data: "json, name=outputAudioConfigMask" })
  outputAudioConfigMask?: string;

  @Metadata({ data: "json, name=queryInput" })
  queryInput?: GoogleCloudDialogflowV2QueryInput;

  @Metadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowV2QueryParameters;
}
