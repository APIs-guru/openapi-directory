import { SpeakeasyBase } from "../../../internal/utils";
import { AccountActivity } from "./accountactivity";
export declare enum AccountDetailsAppLicensingVerdictEnum {
    Unknown = "UNKNOWN",
    Licensed = "LICENSED",
    Unlicensed = "UNLICENSED",
    Unevaluated = "UNEVALUATED"
}
/**
 * Contains the account information such as the licensing status for the user in the scope.
**/
export declare class AccountDetails extends SpeakeasyBase {
    accountActivity?: AccountActivity;
    appLicensingVerdict?: AccountDetailsAppLicensingVerdictEnum;
}
