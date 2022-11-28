import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1InputAudioConfig } from "./googleclouddialogflowv2beta1inputaudioconfig";



// GoogleCloudDialogflowV2beta1AudioInput
/** 
 * Represents the natural language speech audio to be processed.
**/
export class GoogleCloudDialogflowV2beta1AudioInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GoogleCloudDialogflowV2beta1InputAudioConfig;
}
