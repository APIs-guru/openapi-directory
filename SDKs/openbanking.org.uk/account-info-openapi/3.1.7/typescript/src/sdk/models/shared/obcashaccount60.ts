import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObCashAccount60
/** 
 * Unambiguous identification of the account of the creditor, in the case of a debit transaction.
**/
export class ObCashAccount60 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName?: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}
