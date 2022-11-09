import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObPostalAddress6 } from "./obpostaladdress6";


// ObBranchAndFinancialInstitutionIdentification60
/** 
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
 * This is the servicer of the beneficiary account.
**/
export class ObBranchAndFinancialInstitutionIdentification60 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName?: string;
}
