import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";



// GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject
/** 
 * Response media object for media content card.
**/
export class GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentUrl" })
  contentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: GoogleCloudDialogflowV2IntentMessageImage;

  @SpeakeasyMetadata({ data: "json, name=largeImage" })
  largeImage?: GoogleCloudDialogflowV2IntentMessageImage;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
