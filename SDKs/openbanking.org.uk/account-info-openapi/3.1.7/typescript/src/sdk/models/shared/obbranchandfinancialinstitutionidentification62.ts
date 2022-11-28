import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObPostalAddress6 } from "./obpostaladdress6";



// ObBranchAndFinancialInstitutionIdentification62
/** 
 * Financial institution servicing an account for the debtor.
**/
export class ObBranchAndFinancialInstitutionIdentification62 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName?: string;
}
