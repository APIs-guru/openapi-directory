import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3InputAudioConfig } from "./googleclouddialogflowcxv3inputaudioconfig";


// GoogleCloudDialogflowCxV3AudioInput
/** 
 * Represents the natural speech audio to be processed.
**/
export class GoogleCloudDialogflowCxV3AudioInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio" })
  audio?: string;

  @Metadata({ data: "json, name=config" })
  config?: GoogleCloudDialogflowCxV3InputAudioConfig;
}
