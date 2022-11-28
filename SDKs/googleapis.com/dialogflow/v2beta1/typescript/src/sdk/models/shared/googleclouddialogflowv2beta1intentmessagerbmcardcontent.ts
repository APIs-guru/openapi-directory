import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia } from "./googleclouddialogflowv2beta1intentmessagerbmcardcontentrbmmedia";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestion";



// GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent
/** 
 * Rich Business Messaging (RBM) Card content
**/
export class GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=media" })
  media?: GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;

  @SpeakeasyMetadata({ data: "json, name=suggestions", elemType: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion })
  suggestions?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
