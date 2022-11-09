import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial
/** 
 * Opens the user's default dialer app with the specified phone number but does not dial automatically.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial extends SpeakeasyBase {
  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
