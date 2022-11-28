import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountActivity } from "./accountactivity";


export enum AccountDetailsAppLicensingVerdictEnum {
    Unknown = "UNKNOWN",
    Licensed = "LICENSED",
    Unlicensed = "UNLICENSED",
    Unevaluated = "UNEVALUATED"
}


// AccountDetails
/** 
 * Contains the account information such as the licensing status for the user in the scope.
**/
export class AccountDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountActivity" })
  accountActivity?: AccountActivity;

  @SpeakeasyMetadata({ data: "json, name=appLicensingVerdict" })
  appLicensingVerdict?: AccountDetailsAppLicensingVerdictEnum;
}
