import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1IntentMessageTableCardCell } from "./googleclouddialogflowv2beta1intentmessagetablecardcell";


// GoogleCloudDialogflowV2beta1IntentMessageTableCardRow
/** 
 * Row of TableCard.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageTableCardRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=cells", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardCell })
  cells?: GoogleCloudDialogflowV2beta1IntentMessageTableCardCell[];

  @Metadata({ data: "json, name=dividerAfter" })
  dividerAfter?: boolean;
}
