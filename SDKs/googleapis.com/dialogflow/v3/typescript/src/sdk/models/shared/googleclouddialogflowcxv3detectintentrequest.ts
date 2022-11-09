import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3OutputAudioConfig } from "./googleclouddialogflowcxv3outputaudioconfig";
import { GoogleCloudDialogflowCxV3QueryInput } from "./googleclouddialogflowcxv3queryinput";
import { GoogleCloudDialogflowCxV3QueryParameters } from "./googleclouddialogflowcxv3queryparameters";


// GoogleCloudDialogflowCxV3DetectIntentRequest
/** 
 * The request to detect user's intent.
**/
export class GoogleCloudDialogflowCxV3DetectIntentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;

  @Metadata({ data: "json, name=queryInput" })
  queryInput?: GoogleCloudDialogflowCxV3QueryInput;

  @Metadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowCxV3QueryParameters;
}
