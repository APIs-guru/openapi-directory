import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UrlRestriction } from "./urlrestriction";

export enum UserListStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    Open = "OPEN"
,    Closed = "CLOSED"
}


// UserList
/** 
 * Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
**/
export class UserList extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=membershipDurationDays" })
  membershipDurationDays?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: UserListStatusEnum;

  @Metadata({ data: "json, name=urlRestriction" })
  urlRestriction?: UrlRestriction;
}
