import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1InputAudioConfig } from "./googleclouddialogflowv2beta1inputaudioconfig";
import { GoogleCloudDialogflowV2beta1TelephonyDtmfEvents } from "./googleclouddialogflowv2beta1telephonydtmfevents";
import { GoogleCloudDialogflowV2beta1EventInput } from "./googleclouddialogflowv2beta1eventinput";
import { GoogleCloudDialogflowV2beta1TextInput } from "./googleclouddialogflowv2beta1textinput";
/**
 * Represents the query input. It can contain either: 1. An audio config which instructs the speech recognizer how to process the speech audio. 2. A conversational query in the form of text. 3. An event that specifies which intent to trigger.
**/
export declare class GoogleCloudDialogflowV2beta1QueryInput extends SpeakeasyBase {
    audioConfig?: GoogleCloudDialogflowV2beta1InputAudioConfig;
    dtmf?: GoogleCloudDialogflowV2beta1TelephonyDtmfEvents;
    event?: GoogleCloudDialogflowV2beta1EventInput;
    text?: GoogleCloudDialogflowV2beta1TextInput;
}
