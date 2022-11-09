import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2IntentMessageCarouselSelectItem } from "./googleclouddialogflowv2intentmessagecarouselselectitem";


// GoogleCloudDialogflowV2IntentMessageCarouselSelect
/** 
 * The card for presenting a carousel of options to select from.
**/
export class GoogleCloudDialogflowV2IntentMessageCarouselSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.GoogleCloudDialogflowV2IntentMessageCarouselSelectItem })
  items?: GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[];
}
