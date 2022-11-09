import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum {
    MessageFormatUnspecified = "MESSAGE_FORMAT_UNSPECIFIED"
,    Proto = "PROTO"
,    Json = "JSON"
}


// GoogleCloudDialogflowV2beta1NotificationConfig
/** 
 * Defines notification behavior.
**/
export class GoogleCloudDialogflowV2beta1NotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageFormat" })
  messageFormat?: GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
