import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";



// GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject
/** 
 * Response media object for media content card.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentUrl" })
  contentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: GoogleCloudDialogflowV2beta1IntentMessageImage;

  @SpeakeasyMetadata({ data: "json, name=largeImage" })
  largeImage?: GoogleCloudDialogflowV2beta1IntentMessageImage;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
