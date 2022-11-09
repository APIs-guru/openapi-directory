import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia } from "./googleclouddialogflowv2beta1intentmessagerbmcardcontentrbmmedia";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestion";


// GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent
/** 
 * Rich Business Messaging (RBM) Card content
**/
export class GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=media" })
  media?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;

  @Metadata({ data: "json, name=suggestions", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion })
  suggestions?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion[];

  @Metadata({ data: "json, name=title" })
  title?: string;
}
