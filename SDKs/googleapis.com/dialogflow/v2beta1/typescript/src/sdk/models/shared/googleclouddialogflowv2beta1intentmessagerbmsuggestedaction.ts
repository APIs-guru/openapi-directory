import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactiondial";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri } from "./googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactionopenuri";



// GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction
/** 
 * Rich Business Messaging (RBM) suggested client-side action that the user can choose from the card.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dial" })
  dial?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial;

  @SpeakeasyMetadata({ data: "json, name=openUrl" })
  openUrl?: GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;

  @SpeakeasyMetadata({ data: "json, name=postbackData" })
  postbackData?: string;

  @SpeakeasyMetadata({ data: "json, name=shareLocation" })
  shareLocation?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
