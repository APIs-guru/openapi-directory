import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1ResponseMessageText
/** 
 * The text response message.
**/
export class GoogleCloudDialogflowCxV3beta1ResponseMessageText extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @Metadata({ data: "json, name=text" })
  text?: string[];
}
