import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1ResponseMessageText
/** 
 * The text response message.
**/
export class GoogleCloudDialogflowV2beta1ResponseMessageText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string[];
}
