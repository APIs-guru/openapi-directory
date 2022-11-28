import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageTableCardCell } from "./googleclouddialogflowv2beta1intentmessagetablecardcell";



// GoogleCloudDialogflowV2beta1IntentMessageTableCardRow
/** 
 * Row of TableCard.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageTableCardRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cells", elemType: GoogleCloudDialogflowV2beta1IntentMessageTableCardCell })
  cells?: GoogleCloudDialogflowV2beta1IntentMessageTableCardCell[];

  @SpeakeasyMetadata({ data: "json, name=dividerAfter" })
  dividerAfter?: boolean;
}
