import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Fulfillment } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3EventHandler } from "./googleclouddialogflowcxv3eventhandler";


// GoogleCloudDialogflowCxV3FormParameterFillBehavior
/** 
 * Configuration for how the filling of a parameter should be handled.
**/
export class GoogleCloudDialogflowCxV3FormParameterFillBehavior extends SpeakeasyBase {
  @Metadata({ data: "json, name=initialPromptFulfillment" })
  initialPromptFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;

  @Metadata({ data: "json, name=repromptEventHandlers", elemType: shared.GoogleCloudDialogflowCxV3EventHandler })
  repromptEventHandlers?: GoogleCloudDialogflowCxV3EventHandler[];
}
