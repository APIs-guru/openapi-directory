import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum {
    MessageFormatUnspecified = "MESSAGE_FORMAT_UNSPECIFIED",
    Proto = "PROTO",
    Json = "JSON"
}


// GoogleCloudDialogflowV2beta1NotificationConfig
/** 
 * Defines notification behavior.
**/
export class GoogleCloudDialogflowV2beta1NotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageFormat" })
  messageFormat?: GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
