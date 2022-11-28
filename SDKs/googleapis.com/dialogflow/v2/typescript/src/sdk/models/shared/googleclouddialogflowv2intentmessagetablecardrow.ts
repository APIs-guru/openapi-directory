import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageTableCardCell } from "./googleclouddialogflowv2intentmessagetablecardcell";



// GoogleCloudDialogflowV2IntentMessageTableCardRow
/** 
 * Row of TableCard.
**/
export class GoogleCloudDialogflowV2IntentMessageTableCardRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cells", elemType: GoogleCloudDialogflowV2IntentMessageTableCardCell })
  cells?: GoogleCloudDialogflowV2IntentMessageTableCardCell[];

  @SpeakeasyMetadata({ data: "json, name=dividerAfter" })
  dividerAfter?: boolean;
}
