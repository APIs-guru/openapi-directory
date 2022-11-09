import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1Fulfillment } from "./googleclouddialogflowcxv3beta1fulfillment";
import { GoogleCloudDialogflowCxV3beta1EventHandler } from "./googleclouddialogflowcxv3beta1eventhandler";


// GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior
/** 
 * Configuration for how the filling of a parameter should be handled.
**/
export class GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior extends SpeakeasyBase {
  @Metadata({ data: "json, name=initialPromptFulfillment" })
  initialPromptFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;

  @Metadata({ data: "json, name=repromptEventHandlers", elemType: shared.GoogleCloudDialogflowCxV3beta1EventHandler })
  repromptEventHandlers?: GoogleCloudDialogflowCxV3beta1EventHandler[];
}
