import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3ResponseMessageText
/** 
 * The text response message.
**/
export class GoogleCloudDialogflowCxV3ResponseMessageText extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowPlaybackInterruption" })
  allowPlaybackInterruption?: boolean;

  @Metadata({ data: "json, name=text" })
  text?: string[];
}
