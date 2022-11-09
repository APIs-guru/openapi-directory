import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Notification } from "./notification";


// Notifications
/** 
 * A list of notification subscriptions.
**/
export class Notifications extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Notification })
  items?: Notification[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
