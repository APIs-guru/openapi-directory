import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Message } from "./googleclouddialogflowv2beta1message";
/**
 * The response message for Conversations.ListMessages.
**/
export declare class GoogleCloudDialogflowV2beta1ListMessagesResponse extends SpeakeasyBase {
    messages?: GoogleCloudDialogflowV2beta1Message[];
    nextPageToken?: string;
}
