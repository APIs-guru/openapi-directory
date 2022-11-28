import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObBranchAndFinancialInstitutionIdentification50
/** 
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
**/
export class ObBranchAndFinancialInstitutionIdentification50 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;
}
