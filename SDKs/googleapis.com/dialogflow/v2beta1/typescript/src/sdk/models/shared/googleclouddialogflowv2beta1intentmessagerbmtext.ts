import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestion";



// GoogleCloudDialogflowV2beta1IntentMessageRbmText
/** 
 * Rich Business Messaging (RBM) text response with suggestions.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageRbmText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rbmSuggestion", elemType: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion })
  rbmSuggestion?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
