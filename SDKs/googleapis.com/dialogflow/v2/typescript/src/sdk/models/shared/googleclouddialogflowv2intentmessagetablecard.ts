import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2IntentMessageBasicCardButton } from "./googleclouddialogflowv2intentmessagebasiccardbutton";
import { GoogleCloudDialogflowV2IntentMessageColumnProperties } from "./googleclouddialogflowv2intentmessagecolumnproperties";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageTableCardRow } from "./googleclouddialogflowv2intentmessagetablecardrow";


// GoogleCloudDialogflowV2IntentMessageTableCard
/** 
 * Table card for Actions on Google.
**/
export class GoogleCloudDialogflowV2IntentMessageTableCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttons", elemType: shared.GoogleCloudDialogflowV2IntentMessageBasicCardButton })
  buttons?: GoogleCloudDialogflowV2IntentMessageBasicCardButton[];

  @Metadata({ data: "json, name=columnProperties", elemType: shared.GoogleCloudDialogflowV2IntentMessageColumnProperties })
  columnProperties?: GoogleCloudDialogflowV2IntentMessageColumnProperties[];

  @Metadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2IntentMessageImage;

  @Metadata({ data: "json, name=rows", elemType: shared.GoogleCloudDialogflowV2IntentMessageTableCardRow })
  rows?: GoogleCloudDialogflowV2IntentMessageTableCardRow[];

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
