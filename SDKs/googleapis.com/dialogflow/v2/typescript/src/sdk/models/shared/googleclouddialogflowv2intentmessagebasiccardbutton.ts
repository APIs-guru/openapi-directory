import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction } from "./googleclouddialogflowv2intentmessagebasiccardbuttonopenuriaction";



// GoogleCloudDialogflowV2IntentMessageBasicCardButton
/** 
 * The button object that appears at the bottom of a card.
**/
export class GoogleCloudDialogflowV2IntentMessageBasicCardButton extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=openUriAction" })
  openUriAction?: GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
