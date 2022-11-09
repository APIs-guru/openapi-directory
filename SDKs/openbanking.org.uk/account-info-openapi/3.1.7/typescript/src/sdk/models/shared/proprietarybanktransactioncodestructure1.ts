import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProprietaryBankTransactionCodeStructure1
/** 
 * Set of elements to fully identify a proprietary bank transaction code.
**/
export class ProprietaryBankTransactionCodeStructure1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code: string;

  @Metadata({ data: "json, name=Issuer" })
  issuer?: string;
}
