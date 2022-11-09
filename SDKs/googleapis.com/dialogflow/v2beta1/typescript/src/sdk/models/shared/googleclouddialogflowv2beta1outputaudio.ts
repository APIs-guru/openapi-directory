import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1OutputAudioConfig } from "./googleclouddialogflowv2beta1outputaudioconfig";


// GoogleCloudDialogflowV2beta1OutputAudio
/** 
 * Represents the natural language speech audio to be played to the end user.
**/
export class GoogleCloudDialogflowV2beta1OutputAudio extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio" })
  audio?: string;

  @Metadata({ data: "json, name=config" })
  config?: GoogleCloudDialogflowV2beta1OutputAudioConfig;
}
