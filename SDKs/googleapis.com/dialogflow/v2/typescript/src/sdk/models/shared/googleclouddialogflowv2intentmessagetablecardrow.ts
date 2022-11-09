import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2IntentMessageTableCardCell } from "./googleclouddialogflowv2intentmessagetablecardcell";


// GoogleCloudDialogflowV2IntentMessageTableCardRow
/** 
 * Row of TableCard.
**/
export class GoogleCloudDialogflowV2IntentMessageTableCardRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=cells", elemType: shared.GoogleCloudDialogflowV2IntentMessageTableCardCell })
  cells?: GoogleCloudDialogflowV2IntentMessageTableCardCell[];

  @Metadata({ data: "json, name=dividerAfter" })
  dividerAfter?: boolean;
}
