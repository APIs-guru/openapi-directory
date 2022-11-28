import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3OutputAudioConfig } from "./googleclouddialogflowcxv3outputaudioconfig";
import { GoogleCloudDialogflowCxV3QueryInput } from "./googleclouddialogflowcxv3queryinput";
import { GoogleCloudDialogflowCxV3QueryParameters } from "./googleclouddialogflowcxv3queryparameters";



// GoogleCloudDialogflowCxV3DetectIntentRequest
/** 
 * The request to detect user's intent.
**/
export class GoogleCloudDialogflowCxV3DetectIntentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputAudioConfig" })
  outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;

  @SpeakeasyMetadata({ data: "json, name=queryInput" })
  queryInput?: GoogleCloudDialogflowCxV3QueryInput;

  @SpeakeasyMetadata({ data: "json, name=queryParams" })
  queryParams?: GoogleCloudDialogflowCxV3QueryParameters;
}
