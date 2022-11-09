import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment } from "./googleclouddialogflowv2beta1responsemessagemixedaudiosegment";


// GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio
/** 
 * Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs.
**/
export class GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio extends SpeakeasyBase {
  @Metadata({ data: "json, name=segments", elemType: shared.GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment })
  segments?: GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment[];
}
