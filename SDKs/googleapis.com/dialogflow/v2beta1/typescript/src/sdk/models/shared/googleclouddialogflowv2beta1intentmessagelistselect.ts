import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1IntentMessageListSelectItem } from "./googleclouddialogflowv2beta1intentmessagelistselectitem";


// GoogleCloudDialogflowV2beta1IntentMessageListSelect
/** 
 * The card for presenting a list of options to select from.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageListSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessageListSelectItem })
  items?: GoogleCloudDialogflowV2beta1IntentMessageListSelectItem[];

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
