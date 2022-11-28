import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1OutputAudioConfig } from "./googleclouddialogflowv2beta1outputaudioconfig";



// GoogleCloudDialogflowV2beta1OutputAudio
/** 
 * Represents the natural language speech audio to be played to the end user.
**/
export class GoogleCloudDialogflowV2beta1OutputAudio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GoogleCloudDialogflowV2beta1OutputAudioConfig;
}
