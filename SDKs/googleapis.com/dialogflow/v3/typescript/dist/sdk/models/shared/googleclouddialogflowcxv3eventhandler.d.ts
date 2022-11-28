import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Fulfillment } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3FulfillmentInput } from "./googleclouddialogflowcxv3fulfillment";
/**
 * An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
**/
export declare class GoogleCloudDialogflowCxV3EventHandler extends SpeakeasyBase {
    event?: string;
    name?: string;
    targetFlow?: string;
    targetPage?: string;
    triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
}
/**
 * An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
**/
export declare class GoogleCloudDialogflowCxV3EventHandlerInput extends SpeakeasyBase {
    event?: string;
    targetFlow?: string;
    targetPage?: string;
    triggerFulfillment?: GoogleCloudDialogflowCxV3FulfillmentInput;
}
