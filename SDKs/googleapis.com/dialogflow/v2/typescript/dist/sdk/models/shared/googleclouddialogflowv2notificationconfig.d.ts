import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum {
    MessageFormatUnspecified = "MESSAGE_FORMAT_UNSPECIFIED",
    Proto = "PROTO",
    Json = "JSON"
}
/**
 * Defines notification behavior.
**/
export declare class GoogleCloudDialogflowV2NotificationConfig extends SpeakeasyBase {
    messageFormat?: GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum;
    topic?: string;
}
