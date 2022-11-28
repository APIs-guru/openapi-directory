import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Fulfillment } from "./googleclouddialogflowcxv3beta1fulfillment";
import { GoogleCloudDialogflowCxV3beta1FulfillmentInput } from "./googleclouddialogflowcxv3beta1fulfillment";
/**
 * A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.
**/
export declare class GoogleCloudDialogflowCxV3beta1TransitionRoute extends SpeakeasyBase {
    condition?: string;
    intent?: string;
    name?: string;
    targetFlow?: string;
    targetPage?: string;
    triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
}
/**
 * A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.
**/
export declare class GoogleCloudDialogflowCxV3beta1TransitionRouteInput extends SpeakeasyBase {
    condition?: string;
    intent?: string;
    targetFlow?: string;
    targetPage?: string;
    triggerFulfillment?: GoogleCloudDialogflowCxV3beta1FulfillmentInput;
}
