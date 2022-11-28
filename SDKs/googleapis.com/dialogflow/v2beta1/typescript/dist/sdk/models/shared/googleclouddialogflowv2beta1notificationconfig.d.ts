import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum {
    MessageFormatUnspecified = "MESSAGE_FORMAT_UNSPECIFIED",
    Proto = "PROTO",
    Json = "JSON"
}
/**
 * Defines notification behavior.
**/
export declare class GoogleCloudDialogflowV2beta1NotificationConfig extends SpeakeasyBase {
    messageFormat?: GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum;
    topic?: string;
}
