import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Fulfillment } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3FulfillmentInput } from "./googleclouddialogflowcxv3fulfillment";



// GoogleCloudDialogflowCxV3TransitionRoute
/** 
 * A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.
**/
export class GoogleCloudDialogflowCxV3TransitionRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=targetFlow" })
  targetFlow?: string;

  @SpeakeasyMetadata({ data: "json, name=targetPage" })
  targetPage?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerFulfillment" })
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
}


// GoogleCloudDialogflowCxV3TransitionRouteInput
/** 
 * A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.
**/
export class GoogleCloudDialogflowCxV3TransitionRouteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: string;

  @SpeakeasyMetadata({ data: "json, name=targetFlow" })
  targetFlow?: string;

  @SpeakeasyMetadata({ data: "json, name=targetPage" })
  targetPage?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerFulfillment" })
  triggerFulfillment?: GoogleCloudDialogflowCxV3FulfillmentInput;
}
