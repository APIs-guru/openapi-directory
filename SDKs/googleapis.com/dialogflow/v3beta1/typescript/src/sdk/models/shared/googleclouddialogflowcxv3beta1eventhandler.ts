import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1FulfillmentInput } from "./googleclouddialogflowcxv3beta1fulfillment";
import { GoogleCloudDialogflowCxV3beta1Fulfillment } from "./googleclouddialogflowcxv3beta1fulfillment";



// GoogleCloudDialogflowCxV3beta1EventHandlerInput
/** 
 * An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
**/
export class GoogleCloudDialogflowCxV3beta1EventHandlerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: string;

  @SpeakeasyMetadata({ data: "json, name=targetFlow" })
  targetFlow?: string;

  @SpeakeasyMetadata({ data: "json, name=targetPage" })
  targetPage?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerFulfillment" })
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1FulfillmentInput;
}


// GoogleCloudDialogflowCxV3beta1EventHandler
/** 
 * An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
**/
export class GoogleCloudDialogflowCxV3beta1EventHandler extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=targetFlow" })
  targetFlow?: string;

  @SpeakeasyMetadata({ data: "json, name=targetPage" })
  targetPage?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerFulfillment" })
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
}
