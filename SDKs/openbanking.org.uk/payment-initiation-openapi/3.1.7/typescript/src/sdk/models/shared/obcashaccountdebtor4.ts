import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObCashAccountDebtor4
/** 
 * ^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent.
**/
export class ObCashAccountDebtor4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName?: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}
