import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Fulfillment } from "./googleclouddialogflowcxv3beta1fulfillment";
import { GoogleCloudDialogflowCxV3beta1EventHandler } from "./googleclouddialogflowcxv3beta1eventhandler";
import { GoogleCloudDialogflowCxV3beta1FulfillmentInput } from "./googleclouddialogflowcxv3beta1fulfillment";
import { GoogleCloudDialogflowCxV3beta1EventHandlerInput } from "./googleclouddialogflowcxv3beta1eventhandler";
/**
 * Configuration for how the filling of a parameter should be handled.
**/
export declare class GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior extends SpeakeasyBase {
    initialPromptFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
    repromptEventHandlers?: GoogleCloudDialogflowCxV3beta1EventHandler[];
}
/**
 * Configuration for how the filling of a parameter should be handled.
**/
export declare class GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput extends SpeakeasyBase {
    initialPromptFulfillment?: GoogleCloudDialogflowCxV3beta1FulfillmentInput;
    repromptEventHandlers?: GoogleCloudDialogflowCxV3beta1EventHandlerInput[];
}
