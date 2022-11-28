import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageCarouselSelectItem } from "./googleclouddialogflowv2intentmessagecarouselselectitem";



// GoogleCloudDialogflowV2IntentMessageCarouselSelect
/** 
 * The card for presenting a carousel of options to select from.
**/
export class GoogleCloudDialogflowV2IntentMessageCarouselSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GoogleCloudDialogflowV2IntentMessageCarouselSelectItem })
  items?: GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[];
}
