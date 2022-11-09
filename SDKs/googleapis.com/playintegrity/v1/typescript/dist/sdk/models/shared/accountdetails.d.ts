import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountActivity } from "./accountactivity";
import { AccountRiskVerdict } from "./accountriskverdict";
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
    accountRiskVerdict?: AccountRiskVerdict;
    appLicensingVerdict?: AccountDetailsAppLicensingVerdictEnum;
}
