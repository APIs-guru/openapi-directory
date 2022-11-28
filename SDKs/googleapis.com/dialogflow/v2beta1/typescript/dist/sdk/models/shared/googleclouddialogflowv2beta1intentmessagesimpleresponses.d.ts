import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse } from "./googleclouddialogflowv2beta1intentmessagesimpleresponse";
/**
 * The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
**/
export declare class GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses extends SpeakeasyBase {
    simpleResponses?: GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse[];
}
