import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1InputAudioConfig } from "./googleclouddialogflowv2beta1inputaudioconfig";
import { GoogleCloudDialogflowV2beta1TelephonyDtmfEvents } from "./googleclouddialogflowv2beta1telephonydtmfevents";
import { GoogleCloudDialogflowV2beta1EventInput } from "./googleclouddialogflowv2beta1eventinput";
import { GoogleCloudDialogflowV2beta1TextInput } from "./googleclouddialogflowv2beta1textinput";


// GoogleCloudDialogflowV2beta1QueryInput
/** 
 * Represents the query input. It can contain either: 1. An audio config which instructs the speech recognizer how to process the speech audio. 2. A conversational query in the form of text. 3. An event that specifies which intent to trigger.
**/
export class GoogleCloudDialogflowV2beta1QueryInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioConfig" })
  audioConfig?: GoogleCloudDialogflowV2beta1InputAudioConfig;

  @Metadata({ data: "json, name=dtmf" })
  dtmf?: GoogleCloudDialogflowV2beta1TelephonyDtmfEvents;

  @Metadata({ data: "json, name=event" })
  event?: GoogleCloudDialogflowV2beta1EventInput;

  @Metadata({ data: "json, name=text" })
  text?: GoogleCloudDialogflowV2beta1TextInput;
}
