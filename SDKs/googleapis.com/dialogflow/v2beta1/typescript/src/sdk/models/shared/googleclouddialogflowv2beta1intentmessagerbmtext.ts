import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestion";


// GoogleCloudDialogflowV2beta1IntentMessageRbmText
/** 
 * Rich Business Messaging (RBM) text response with suggestions.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageRbmText extends SpeakeasyBase {
  @Metadata({ data: "json, name=rbmSuggestion", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion })
  rbmSuggestion?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion[];

  @Metadata({ data: "json, name=text" })
  text?: string;
}
