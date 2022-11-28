import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Fulfillment } from "./googleclouddialogflowcxv3beta1fulfillment";
import { GoogleCloudDialogflowCxV3beta1EventHandler } from "./googleclouddialogflowcxv3beta1eventhandler";
import { GoogleCloudDialogflowCxV3beta1FulfillmentInput } from "./googleclouddialogflowcxv3beta1fulfillment";
import { GoogleCloudDialogflowCxV3beta1EventHandlerInput } from "./googleclouddialogflowcxv3beta1eventhandler";



// GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior
/** 
 * Configuration for how the filling of a parameter should be handled.
**/
export class GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initialPromptFulfillment" })
  initialPromptFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;

  @SpeakeasyMetadata({ data: "json, name=repromptEventHandlers", elemType: GoogleCloudDialogflowCxV3beta1EventHandler })
  repromptEventHandlers?: GoogleCloudDialogflowCxV3beta1EventHandler[];
}


// GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput
/** 
 * Configuration for how the filling of a parameter should be handled.
**/
export class GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initialPromptFulfillment" })
  initialPromptFulfillment?: GoogleCloudDialogflowCxV3beta1FulfillmentInput;

  @SpeakeasyMetadata({ data: "json, name=repromptEventHandlers", elemType: GoogleCloudDialogflowCxV3beta1EventHandlerInput })
  repromptEventHandlers?: GoogleCloudDialogflowCxV3beta1EventHandlerInput[];
}
