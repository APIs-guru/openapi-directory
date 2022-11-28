import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment } from "./googleclouddialogflowv2beta1responsemessagemixedaudiosegment";



// GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio
/** 
 * Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs.
**/
export class GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=segments", elemType: GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment })
  segments?: GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment[];
}
