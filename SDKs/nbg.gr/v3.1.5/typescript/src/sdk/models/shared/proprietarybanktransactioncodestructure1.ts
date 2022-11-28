import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProprietaryBankTransactionCodeStructure1
/** 
 * Set of elements to fully identify a proprietary bank transaction code.
**/
export class ProprietaryBankTransactionCodeStructure1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=Issuer" })
  issuer?: string;
}
