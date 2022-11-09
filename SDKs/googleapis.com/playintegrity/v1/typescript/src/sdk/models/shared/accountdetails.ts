import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountActivity } from "./accountactivity";
import { AccountRiskVerdict } from "./accountriskverdict";

export enum AccountDetailsAppLicensingVerdictEnum {
    Unknown = "UNKNOWN"
,    Licensed = "LICENSED"
,    Unlicensed = "UNLICENSED"
,    Unevaluated = "UNEVALUATED"
}


// AccountDetails
/** 
 * Contains the account information such as the licensing status for the user in the scope.
**/
export class AccountDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountActivity" })
  accountActivity?: AccountActivity;

  @Metadata({ data: "json, name=accountRiskVerdict" })
  accountRiskVerdict?: AccountRiskVerdict;

  @Metadata({ data: "json, name=appLicensingVerdict" })
  appLicensingVerdict?: AccountDetailsAppLicensingVerdictEnum;
}
