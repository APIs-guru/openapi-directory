import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageListSelectItem } from "./googleclouddialogflowv2intentmessagelistselectitem";



// GoogleCloudDialogflowV2IntentMessageListSelect
/** 
 * The card for presenting a list of options to select from.
**/
export class GoogleCloudDialogflowV2IntentMessageListSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GoogleCloudDialogflowV2IntentMessageListSelectItem })
  items?: GoogleCloudDialogflowV2IntentMessageListSelectItem[];

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
