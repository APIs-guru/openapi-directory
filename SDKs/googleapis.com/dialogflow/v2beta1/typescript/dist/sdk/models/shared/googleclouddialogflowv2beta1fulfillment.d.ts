import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1FulfillmentFeature } from "./googleclouddialogflowv2beta1fulfillmentfeature";
import { GoogleCloudDialogflowV2beta1FulfillmentGenericWebService } from "./googleclouddialogflowv2beta1fulfillmentgenericwebservice";
/**
 * By default, your agent responds to a matched intent with a static response. As an alternative, you can provide a more dynamic response by using fulfillment. When you enable fulfillment for an intent, Dialogflow responds to that intent by calling a service that you define. For example, if an end-user wants to schedule a haircut on Friday, your service can check your database and respond to the end-user with availability information for Friday. For more information, see the [fulfillment guide](https://cloud.google.com/dialogflow/docs/fulfillment-overview).
**/
export declare class GoogleCloudDialogflowV2beta1Fulfillment extends SpeakeasyBase {
    displayName?: string;
    enabled?: boolean;
    features?: GoogleCloudDialogflowV2beta1FulfillmentFeature[];
    genericWebService?: GoogleCloudDialogflowV2beta1FulfillmentGenericWebService;
    name?: string;
}
