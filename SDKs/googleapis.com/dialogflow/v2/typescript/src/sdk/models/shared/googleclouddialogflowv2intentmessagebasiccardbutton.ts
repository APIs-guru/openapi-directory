import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction } from "./googleclouddialogflowv2intentmessagebasiccardbuttonopenuriaction";


// GoogleCloudDialogflowV2IntentMessageBasicCardButton
/** 
 * The button object that appears at the bottom of a card.
**/
export class GoogleCloudDialogflowV2IntentMessageBasicCardButton extends SpeakeasyBase {
  @Metadata({ data: "json, name=openUriAction" })
  openUriAction?: GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
