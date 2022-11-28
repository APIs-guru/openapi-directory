import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageListSelectItem } from "./googleclouddialogflowv2beta1intentmessagelistselectitem";



// GoogleCloudDialogflowV2beta1IntentMessageListSelect
/** 
 * The card for presenting a list of options to select from.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageListSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GoogleCloudDialogflowV2beta1IntentMessageListSelectItem })
  items?: GoogleCloudDialogflowV2beta1IntentMessageListSelectItem[];

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
