import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3ResponseMessageTextInput
/** 
 * The text response message.
**/
export class GoogleCloudDialogflowCxV3ResponseMessageTextInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string[];
}


// GoogleCloudDialogflowCxV3ResponseMessageText
/** 
 * The text response message.
**/
export class GoogleCloudDialogflowCxV3ResponseMessageText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string[];
}
