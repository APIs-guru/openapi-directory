import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObBankTransactionCodeStructure1
/** 
 * Set of elements used to fully identify the type of underlying transaction resulting in an entry.
**/
export class ObBankTransactionCodeStructure1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=SubCode" })
  subCode: string;
}
