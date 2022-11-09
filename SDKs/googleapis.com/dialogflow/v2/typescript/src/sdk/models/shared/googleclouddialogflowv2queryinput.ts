import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2InputAudioConfig } from "./googleclouddialogflowv2inputaudioconfig";
import { GoogleCloudDialogflowV2EventInput } from "./googleclouddialogflowv2eventinput";
import { GoogleCloudDialogflowV2TextInput } from "./googleclouddialogflowv2textinput";


// GoogleCloudDialogflowV2QueryInput
/** 
 * Represents the query input. It can contain either: 1. An audio config which instructs the speech recognizer how to process the speech audio. 2. A conversational query in the form of text,. 3. An event that specifies which intent to trigger.
**/
export class GoogleCloudDialogflowV2QueryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioConfig" })
  audioConfig?: GoogleCloudDialogflowV2InputAudioConfig;

  @Metadata({ data: "json, name=event" })
  event?: GoogleCloudDialogflowV2EventInput;

  @Metadata({ data: "json, name=text" })
  text?: GoogleCloudDialogflowV2TextInput;
}
