import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem } from "./googleclouddialogflowv2beta1intentmessagecarouselselectitem";


// GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect
/** 
 * The card for presenting a carousel of options to select from.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem })
  items?: GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem[];
}
