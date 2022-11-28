import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UrlRestriction } from "./urlrestriction";


export enum UserListStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Open = "OPEN",
    Closed = "CLOSED"
}


// UserListInput
/** 
 * Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
**/
export class UserListInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=membershipDurationDays" })
  membershipDurationDays?: string;

  @SpeakeasyMetadata({ data: "json, name=urlRestriction" })
  urlRestriction?: UrlRestriction;
}


// UserList
/** 
 * Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
**/
export class UserList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=membershipDurationDays" })
  membershipDurationDays?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: UserListStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=urlRestriction" })
  urlRestriction?: UrlRestriction;
}
