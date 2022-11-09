import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObCashAccount61
/** 
 * Unambiguous identification of the account of the debtor, in the case of a crebit transaction.
**/
export class ObCashAccount61 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName?: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}
