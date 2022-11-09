import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2IntentMessageImage
/** 
 * The image response message.
**/
export class GoogleCloudDialogflowV2IntentMessageImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessibilityText" })
  accessibilityText?: string;

  @Metadata({ data: "json, name=imageUri" })
  imageUri?: string;
}
