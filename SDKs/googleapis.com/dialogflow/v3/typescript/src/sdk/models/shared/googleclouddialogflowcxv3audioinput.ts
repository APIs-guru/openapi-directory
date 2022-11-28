import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3InputAudioConfig } from "./googleclouddialogflowcxv3inputaudioconfig";



// GoogleCloudDialogflowCxV3AudioInput
/** 
 * Represents the natural speech audio to be processed.
**/
export class GoogleCloudDialogflowCxV3AudioInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GoogleCloudDialogflowCxV3InputAudioConfig;
}
