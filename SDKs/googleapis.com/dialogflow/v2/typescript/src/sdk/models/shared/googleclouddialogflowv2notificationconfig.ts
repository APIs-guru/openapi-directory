import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum {
    MessageFormatUnspecified = "MESSAGE_FORMAT_UNSPECIFIED"
,    Proto = "PROTO"
,    Json = "JSON"
}


// GoogleCloudDialogflowV2NotificationConfig
/** 
 * Defines notification behavior.
**/
export class GoogleCloudDialogflowV2NotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageFormat" })
  messageFormat?: GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
