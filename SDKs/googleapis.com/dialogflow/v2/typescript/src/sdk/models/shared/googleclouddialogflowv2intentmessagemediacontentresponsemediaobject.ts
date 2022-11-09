import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";


// GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject
/** 
 * Response media object for media content card.
**/
export class GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentUrl" })
  contentUrl?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=icon" })
  icon?: GoogleCloudDialogflowV2IntentMessageImage;

  @Metadata({ data: "json, name=largeImage" })
  largeImage?: GoogleCloudDialogflowV2IntentMessageImage;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
