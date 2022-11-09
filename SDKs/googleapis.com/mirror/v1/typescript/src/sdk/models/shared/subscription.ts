import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Notification } from "./notification";


// Subscription
/** 
 * A subscription to events on a collection.
**/
export class Subscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=callbackUrl" })
  callbackUrl?: string;

  @Metadata({ data: "json, name=collection" })
  collection?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=notification" })
  notification?: Notification;

  @Metadata({ data: "json, name=operation" })
  operation?: string[];

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=userToken" })
  userToken?: string;

  @Metadata({ data: "json, name=verifyToken" })
  verifyToken?: string;
}
