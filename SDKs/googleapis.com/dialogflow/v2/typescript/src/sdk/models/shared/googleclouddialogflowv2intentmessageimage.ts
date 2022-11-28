import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2IntentMessageImage
/** 
 * The image response message.
**/
export class GoogleCloudDialogflowV2IntentMessageImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessibilityText" })
  accessibilityText?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;
}
