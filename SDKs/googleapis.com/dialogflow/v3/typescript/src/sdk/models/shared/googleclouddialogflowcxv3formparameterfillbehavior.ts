import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Fulfillment } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3EventHandler } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3FulfillmentInput } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3EventHandlerInput } from "./googleclouddialogflowcxv3eventhandler";



// GoogleCloudDialogflowCxV3FormParameterFillBehavior
/** 
 * Configuration for how the filling of a parameter should be handled.
**/
export class GoogleCloudDialogflowCxV3FormParameterFillBehavior extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initialPromptFulfillment" })
  initialPromptFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;

  @SpeakeasyMetadata({ data: "json, name=repromptEventHandlers", elemType: GoogleCloudDialogflowCxV3EventHandler })
  repromptEventHandlers?: GoogleCloudDialogflowCxV3EventHandler[];
}


// GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput
/** 
 * Configuration for how the filling of a parameter should be handled.
**/
export class GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initialPromptFulfillment" })
  initialPromptFulfillment?: GoogleCloudDialogflowCxV3FulfillmentInput;

  @SpeakeasyMetadata({ data: "json, name=repromptEventHandlers", elemType: GoogleCloudDialogflowCxV3EventHandlerInput })
  repromptEventHandlers?: GoogleCloudDialogflowCxV3EventHandlerInput[];
}
