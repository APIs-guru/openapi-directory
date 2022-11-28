import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The username/password for a database user. Used for specifying initial users at cluster creation time.
**/
export declare class UserPasswordInput extends SpeakeasyBase {
    password?: string;
    user?: string;
}
/**
 * The username/password for a database user. Used for specifying initial users at cluster creation time.
**/
export declare class UserPassword extends SpeakeasyBase {
    password?: string;
    passwordSet?: boolean;
    user?: string;
}
