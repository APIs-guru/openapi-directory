import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3SpeechToTextSettings
/** 
 * Settings related to speech recognition.
**/
export class GoogleCloudDialogflowCxV3SpeechToTextSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableSpeechAdaptation" })
  enableSpeechAdaptation?: boolean;
}
