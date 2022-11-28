import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a Drive user.
**/
export declare class User extends SpeakeasyBase {
    displayName?: string;
    emailAddress?: string;
    kind?: string;
    me?: boolean;
    permissionId?: string;
    photoLink?: string;
}
