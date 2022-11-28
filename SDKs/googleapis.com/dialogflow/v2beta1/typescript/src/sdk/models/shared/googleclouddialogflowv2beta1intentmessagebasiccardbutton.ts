import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction } from "./googleclouddialogflowv2beta1intentmessagebasiccardbuttonopenuriaction";



// GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton
/** 
 * The button object that appears at the bottom of a card.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=openUriAction" })
  openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
