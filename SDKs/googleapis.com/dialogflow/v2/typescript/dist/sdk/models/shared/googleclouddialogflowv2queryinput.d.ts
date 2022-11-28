import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2InputAudioConfig } from "./googleclouddialogflowv2inputaudioconfig";
import { GoogleCloudDialogflowV2EventInput } from "./googleclouddialogflowv2eventinput";
import { GoogleCloudDialogflowV2TextInput } from "./googleclouddialogflowv2textinput";
/**
 * Represents the query input. It can contain either: 1. An audio config which instructs the speech recognizer how to process the speech audio. 2. A conversational query in the form of text,. 3. An event that specifies which intent to trigger.
**/
export declare class GoogleCloudDialogflowV2QueryInput extends SpeakeasyBase {
    audioConfig?: GoogleCloudDialogflowV2InputAudioConfig;
    event?: GoogleCloudDialogflowV2EventInput;
    text?: GoogleCloudDialogflowV2TextInput;
}
