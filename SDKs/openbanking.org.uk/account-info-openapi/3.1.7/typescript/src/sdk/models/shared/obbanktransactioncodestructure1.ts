import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObBankTransactionCodeStructure1
/** 
 * Set of elements used to fully identify the type of underlying transaction resulting in an entry.
**/
export class ObBankTransactionCodeStructure1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code: string;

  @Metadata({ data: "json, name=SubCode" })
  subCode: string;
}
