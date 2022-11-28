import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObCashAccountDebtor4
/** 
 * ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent.
**/
export class ObCashAccountDebtor4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName?: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}
