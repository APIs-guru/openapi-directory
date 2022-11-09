import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1InputAudioConfig } from "./googleclouddialogflowv2beta1inputaudioconfig";


// GoogleCloudDialogflowV2beta1AudioInput
/** 
 * Represents the natural language speech audio to be processed.
**/
export class GoogleCloudDialogflowV2beta1AudioInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio" })
  audio?: string;

  @Metadata({ data: "json, name=config" })
  config?: GoogleCloudDialogflowV2beta1InputAudioConfig;
}
