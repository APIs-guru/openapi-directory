import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Message } from "./googleclouddialogflowv2message";
/**
 * The response message for Conversations.ListMessages.
**/
export declare class GoogleCloudDialogflowV2ListMessagesResponse extends SpeakeasyBase {
    messages?: GoogleCloudDialogflowV2Message[];
    nextPageToken?: string;
}
