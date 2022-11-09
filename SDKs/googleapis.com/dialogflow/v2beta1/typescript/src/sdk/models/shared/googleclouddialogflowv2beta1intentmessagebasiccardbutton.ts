import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction } from "./googleclouddialogflowv2beta1intentmessagebasiccardbuttonopenuriaction";


// GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton
/** 
 * The button object that appears at the bottom of a card.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton extends SpeakeasyBase {
  @Metadata({ data: "json, name=openUriAction" })
  openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
