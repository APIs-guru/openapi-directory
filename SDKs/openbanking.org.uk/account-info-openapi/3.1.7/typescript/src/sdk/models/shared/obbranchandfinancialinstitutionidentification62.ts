import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObPostalAddress6 } from "./obpostaladdress6";


// ObBranchAndFinancialInstitutionIdentification62
/** 
 * Financial institution servicing an account for the debtor.
**/
export class ObBranchAndFinancialInstitutionIdentification62 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName?: string;
}
