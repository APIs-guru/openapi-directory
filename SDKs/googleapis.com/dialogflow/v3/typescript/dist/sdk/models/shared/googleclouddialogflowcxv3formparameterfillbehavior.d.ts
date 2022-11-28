import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Fulfillment } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3EventHandler } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3FulfillmentInput } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3EventHandlerInput } from "./googleclouddialogflowcxv3eventhandler";
/**
 * Configuration for how the filling of a parameter should be handled.
**/
export declare class GoogleCloudDialogflowCxV3FormParameterFillBehavior extends SpeakeasyBase {
    initialPromptFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
    repromptEventHandlers?: GoogleCloudDialogflowCxV3EventHandler[];
}
/**
 * Configuration for how the filling of a parameter should be handled.
**/
export declare class GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput extends SpeakeasyBase {
    initialPromptFulfillment?: GoogleCloudDialogflowCxV3FulfillmentInput;
    repromptEventHandlers?: GoogleCloudDialogflowCxV3EventHandlerInput[];
}
