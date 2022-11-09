import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3Fulfillment } from "./googleclouddialogflowcxv3fulfillment";


// GoogleCloudDialogflowCxV3EventHandler
/** 
 * An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
**/
export class GoogleCloudDialogflowCxV3EventHandler extends SpeakeasyBase {
  @Metadata({ data: "json, name=event" })
  event?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=targetFlow" })
  targetFlow?: string;

  @Metadata({ data: "json, name=targetPage" })
  targetPage?: string;

  @Metadata({ data: "json, name=triggerFulfillment" })
  triggerFulfillment?: GoogleCloudDialogflowCxV3Fulfillment;
}
