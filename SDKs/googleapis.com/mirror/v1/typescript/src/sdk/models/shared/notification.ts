import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserAction } from "./useraction";



// Notification
/** 
 * A notification delivered by the API.
**/
export class Notification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: string;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: string;

  @SpeakeasyMetadata({ data: "json, name=userActions", elemType: UserAction })
  userActions?: UserAction[];

  @SpeakeasyMetadata({ data: "json, name=userToken" })
  userToken?: string;

  @SpeakeasyMetadata({ data: "json, name=verifyToken" })
  verifyToken?: string;
}
