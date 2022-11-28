import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";



// Subscription
/** 
 * A subscription to events on a collection.
**/
export class Subscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callbackUrl" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: Notification;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: string[];

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=userToken" })
  userToken?: string;

  @SpeakeasyMetadata({ data: "json, name=verifyToken" })
  verifyToken?: string;
}
