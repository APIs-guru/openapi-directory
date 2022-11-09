import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserAction } from "./useraction";


// Notification
/** 
 * A notification delivered by the API.
**/
export class Notification extends SpeakeasyBase {
  @Metadata({ data: "json, name=collection" })
  collection?: string;

  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=operation" })
  operation?: string;

  @Metadata({ data: "json, name=userActions", elemType: shared.UserAction })
  userActions?: UserAction[];

  @Metadata({ data: "json, name=userToken" })
  userToken?: string;

  @Metadata({ data: "json, name=verifyToken" })
  verifyToken?: string;
}
