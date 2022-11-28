import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageBasicCardButton } from "./googleclouddialogflowv2intentmessagebasiccardbutton";
import { GoogleCloudDialogflowV2IntentMessageColumnProperties } from "./googleclouddialogflowv2intentmessagecolumnproperties";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageTableCardRow } from "./googleclouddialogflowv2intentmessagetablecardrow";



// GoogleCloudDialogflowV2IntentMessageTableCard
/** 
 * Table card for Actions on Google.
**/
export class GoogleCloudDialogflowV2IntentMessageTableCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttons", elemType: GoogleCloudDialogflowV2IntentMessageBasicCardButton })
  buttons?: GoogleCloudDialogflowV2IntentMessageBasicCardButton[];

  @SpeakeasyMetadata({ data: "json, name=columnProperties", elemType: GoogleCloudDialogflowV2IntentMessageColumnProperties })
  columnProperties?: GoogleCloudDialogflowV2IntentMessageColumnProperties[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2IntentMessageImage;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: GoogleCloudDialogflowV2IntentMessageTableCardRow })
  rows?: GoogleCloudDialogflowV2IntentMessageTableCardRow[];

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
