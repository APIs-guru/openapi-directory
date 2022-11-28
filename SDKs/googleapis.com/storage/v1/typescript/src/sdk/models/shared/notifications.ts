import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";



// Notifications
/** 
 * A list of notification subscriptions.
**/
export class Notifications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Notification })
  items?: Notification[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
