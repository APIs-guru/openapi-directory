import { SpeakeasyBase } from "../../../internal/utils";
import { AuthToken } from "./authtoken";
import { UserData } from "./userdata";
/**
 * Represents an account passed into the Account Manager on Glass.
**/
export declare class Account extends SpeakeasyBase {
    authTokens?: AuthToken[];
    features?: string[];
    password?: string;
    userData?: UserData[];
}
