import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1ResponseMessageText
/** 
 * The text response message.
**/
export class GoogleCloudDialogflowCxV3beta1ResponseMessageText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string[];
}


// GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput
/** 
 * The text response message.
**/
export class GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string[];
}
