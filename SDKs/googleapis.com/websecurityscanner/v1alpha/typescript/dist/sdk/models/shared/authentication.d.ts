import { SpeakeasyBase } from "../../../internal/utils";
import { CustomAccount } from "./customaccount";
import { GoogleAccount } from "./googleaccount";
/**
 * Scan authentication configuration.
**/
export declare class Authentication extends SpeakeasyBase {
    customAccount?: CustomAccount;
    googleAccount?: GoogleAccount;
}
