import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1MessageInput } from "./googleclouddialogflowv2beta1message";
/**
 * The request message to create one Message. Currently it is only used in BatchCreateMessagesRequest.
**/
export declare class GoogleCloudDialogflowV2beta1CreateMessageRequestInput extends SpeakeasyBase {
    message?: GoogleCloudDialogflowV2beta1MessageInput;
    parent?: string;
}
