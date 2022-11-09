import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2IntentMessageListSelectItem } from "./googleclouddialogflowv2intentmessagelistselectitem";


// GoogleCloudDialogflowV2IntentMessageListSelect
/** 
 * The card for presenting a list of options to select from.
**/
export class GoogleCloudDialogflowV2IntentMessageListSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.GoogleCloudDialogflowV2IntentMessageListSelectItem })
  items?: GoogleCloudDialogflowV2IntentMessageListSelectItem[];

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
