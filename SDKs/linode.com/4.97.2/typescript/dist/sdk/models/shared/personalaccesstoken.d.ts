import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Personal Access Token is a token generated manually to access the API without going through an OAuth login.  Personal Access Tokens can have scopes just like OAuth tokens do, and are commonly used to give access to command-line tools like the Linode CLI, or when writing your own integrations.
 *
**/
export declare class PersonalAccessTokenInput extends SpeakeasyBase {
    label?: string;
}
/**
 * A Personal Access Token is a token generated manually to access the API without going through an OAuth login.  Personal Access Tokens can have scopes just like OAuth tokens do, and are commonly used to give access to command-line tools like the Linode CLI, or when writing your own integrations.
 *
**/
export declare class PersonalAccessToken extends SpeakeasyBase {
    created?: Date;
    expiry?: Date;
    id?: number;
    label?: string;
    scopes?: string;
    token?: string;
}
