import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1Fulfillment } from "./googleclouddialogflowcxv3beta1fulfillment";


// GoogleCloudDialogflowCxV3beta1TransitionRoute
/** 
 * A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.
**/
export class GoogleCloudDialogflowCxV3beta1TransitionRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=intent" })
  intent?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=targetFlow" })
  targetFlow?: string;

  @Metadata({ data: "json, name=targetPage" })
  targetPage?: string;

  @Metadata({ data: "json, name=triggerFulfillment" })
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment;
}
