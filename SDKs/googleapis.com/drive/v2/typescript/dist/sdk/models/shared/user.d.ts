import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The user's profile picture.
**/
export declare class UserPicture extends SpeakeasyBase {
    url?: string;
}
/**
 * Information about a Drive user.
**/
export declare class User extends SpeakeasyBase {
    displayName?: string;
    emailAddress?: string;
    isAuthenticatedUser?: boolean;
    kind?: string;
    permissionId?: string;
    picture?: UserPicture;
}
