import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.
 *
**/
export declare class User extends SpeakeasyBase {
    email?: string;
    restricted?: boolean;
    sshKeys?: string[];
    tfaEnabled?: boolean;
    username?: string;
}
/**
 * A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.
 *
**/
export declare class UserInput extends SpeakeasyBase {
    restricted?: boolean;
    sshKeys?: string[];
    username?: string;
}
