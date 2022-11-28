import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1InputAudioConfig } from "./googleclouddialogflowcxv3beta1inputaudioconfig";



// GoogleCloudDialogflowCxV3beta1AudioInput
/** 
 * Represents the natural speech audio to be processed.
**/
export class GoogleCloudDialogflowCxV3beta1AudioInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GoogleCloudDialogflowCxV3beta1InputAudioConfig;
}
