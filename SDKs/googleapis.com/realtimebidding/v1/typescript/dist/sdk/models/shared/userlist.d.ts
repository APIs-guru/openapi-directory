import { SpeakeasyBase } from "../../../internal/utils";
import { UrlRestriction } from "./urlrestriction";
export declare enum UserListStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Open = "OPEN",
    Closed = "CLOSED"
}
/**
 * Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
**/
export declare class UserListInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    membershipDurationDays?: string;
    urlRestriction?: UrlRestriction;
}
/**
 * Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
**/
export declare class UserList extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    membershipDurationDays?: string;
    name?: string;
    status?: UserListStatusEnum;
    urlRestriction?: UrlRestriction;
}
