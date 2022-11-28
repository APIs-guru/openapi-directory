import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment } from "./googleclouddialogflowv2beta1responsemessagemixedaudiosegment";
/**
 * Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs.
**/
export declare class GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio extends SpeakeasyBase {
    segments?: GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment[];
}
