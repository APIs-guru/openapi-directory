import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton } from "./googleclouddialogflowv2beta1intentmessagebasiccardbutton";
import { GoogleCloudDialogflowV2beta1IntentMessageColumnProperties } from "./googleclouddialogflowv2beta1intentmessagecolumnproperties";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageTableCardRow } from "./googleclouddialogflowv2beta1intentmessagetablecardrow";


// GoogleCloudDialogflowV2beta1IntentMessageTableCard
/** 
 * Table card for Actions on Google.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageTableCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttons", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton })
  buttons?: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton[];

  @Metadata({ data: "json, name=columnProperties", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessageColumnProperties })
  columnProperties?: GoogleCloudDialogflowV2beta1IntentMessageColumnProperties[];

  @Metadata({ data: "json, name=image" })
  image?: GoogleCloudDialogflowV2beta1IntentMessageImage;

  @Metadata({ data: "json, name=rows", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessageTableCardRow })
  rows?: GoogleCloudDialogflowV2beta1IntentMessageTableCardRow[];

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
