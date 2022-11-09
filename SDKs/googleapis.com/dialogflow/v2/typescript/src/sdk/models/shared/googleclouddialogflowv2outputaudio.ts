import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2OutputAudioConfig } from "./googleclouddialogflowv2outputaudioconfig";


// GoogleCloudDialogflowV2OutputAudio
/** 
 * Represents the natural language speech audio to be played to the end user.
**/
export class GoogleCloudDialogflowV2OutputAudio extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio" })
  audio?: string;

  @Metadata({ data: "json, name=config" })
  config?: GoogleCloudDialogflowV2OutputAudioConfig;
}
