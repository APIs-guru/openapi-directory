import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";


// GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject
/** 
 * Response media object for media content card.
**/
export class GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentUrl" })
  contentUrl?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=icon" })
  icon?: GoogleCloudDialogflowV2beta1IntentMessageImage;

  @Metadata({ data: "json, name=largeImage" })
  largeImage?: GoogleCloudDialogflowV2beta1IntentMessageImage;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
