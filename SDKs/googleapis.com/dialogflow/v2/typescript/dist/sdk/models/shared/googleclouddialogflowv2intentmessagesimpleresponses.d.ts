import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageSimpleResponse } from "./googleclouddialogflowv2intentmessagesimpleresponse";
/**
 * The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
**/
export declare class GoogleCloudDialogflowV2IntentMessageSimpleResponses extends SpeakeasyBase {
    simpleResponses?: GoogleCloudDialogflowV2IntentMessageSimpleResponse[];
}
