import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObCashAccount50
/** 
 * Provides the details to identify the beneficiary account.
**/
export class ObCashAccount50 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}
