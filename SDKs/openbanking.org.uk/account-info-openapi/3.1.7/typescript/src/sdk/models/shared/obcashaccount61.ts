import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObCashAccount61
/** 
 * Unambiguous identification of the account of the debtor, in the case of a crebit transaction.
**/
export class ObCashAccount61 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName?: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}
