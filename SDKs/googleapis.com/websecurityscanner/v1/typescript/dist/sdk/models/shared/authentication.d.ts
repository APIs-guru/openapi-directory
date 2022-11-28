import { SpeakeasyBase } from "../../../internal/utils";
import { CustomAccount } from "./customaccount";
import { GoogleAccount } from "./googleaccount";
import { IapCredential } from "./iapcredential";
/**
 * Scan authentication configuration.
**/
export declare class Authentication extends SpeakeasyBase {
    customAccount?: CustomAccount;
    googleAccount?: GoogleAccount;
    iapCredential?: IapCredential;
}
