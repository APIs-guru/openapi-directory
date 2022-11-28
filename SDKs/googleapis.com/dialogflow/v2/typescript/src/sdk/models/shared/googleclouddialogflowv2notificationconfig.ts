import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum {
    MessageFormatUnspecified = "MESSAGE_FORMAT_UNSPECIFIED",
    Proto = "PROTO",
    Json = "JSON"
}


// GoogleCloudDialogflowV2NotificationConfig
/** 
 * Defines notification behavior.
**/
export class GoogleCloudDialogflowV2NotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageFormat" })
  messageFormat?: GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
