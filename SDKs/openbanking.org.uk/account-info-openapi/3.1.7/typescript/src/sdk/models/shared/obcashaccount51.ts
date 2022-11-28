import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObCashAccount51
/** 
 * Provides the details to identify the beneficiary account.
**/
export class ObCashAccount51 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}
