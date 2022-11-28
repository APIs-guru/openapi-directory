import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2FulfillmentFeature } from "./googleclouddialogflowv2fulfillmentfeature";
import { GoogleCloudDialogflowV2FulfillmentGenericWebService } from "./googleclouddialogflowv2fulfillmentgenericwebservice";
/**
 * By default, your agent responds to a matched intent with a static response. As an alternative, you can provide a more dynamic response by using fulfillment. When you enable fulfillment for an intent, Dialogflow responds to that intent by calling a service that you define. For example, if an end-user wants to schedule a haircut on Friday, your service can check your database and respond to the end-user with availability information for Friday. For more information, see the [fulfillment guide](https://cloud.google.com/dialogflow/docs/fulfillment-overview).
**/
export declare class GoogleCloudDialogflowV2Fulfillment extends SpeakeasyBase {
    displayName?: string;
    enabled?: boolean;
    features?: GoogleCloudDialogflowV2FulfillmentFeature[];
    genericWebService?: GoogleCloudDialogflowV2FulfillmentGenericWebService;
    name?: string;
}
