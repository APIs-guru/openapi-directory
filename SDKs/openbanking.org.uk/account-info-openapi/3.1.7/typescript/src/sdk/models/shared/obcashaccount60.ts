import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObCashAccount60
/** 
 * Unambiguous identification of the account of the creditor, in the case of a debit transaction.
**/
export class ObCashAccount60 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName?: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}
