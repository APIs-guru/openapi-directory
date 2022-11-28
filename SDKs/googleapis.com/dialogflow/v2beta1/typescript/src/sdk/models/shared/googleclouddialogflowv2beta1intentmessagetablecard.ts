import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton } from "./googleclouddialogflowv2beta1intentmessagebasiccardbutton";
import { GoogleCloudDialogflowV2beta1IntentMessageColumnProperties } from "./googleclouddialogflowv2beta1intentmessagecolumnproperties";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageTableCardRow } from "./googleclouddialogflowv2beta1intentmessagetablecardrow";



// GoogleCloudDialogflowV2beta1IntentMessageTableCard
/** 
 * Table card for Actions on Google.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageTableCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttons", elemType: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton })
  buttons?: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton[];

  @SpeakeasyMetadata({ data: "json, name=columnProperties", elemType: GoogleCloudDialogflowV2beta1IntentMessageColumnProperties })
  columnProperties?: GoogleCloudDialogflowV2beta1IntentMessageColumnProperties[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: GoogleCloudDialogflowV2beta1IntentMessageTableCardRow })
  rows?: GoogleCloudDialogflowV2beta1IntentMessageTableCardRow[];

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
