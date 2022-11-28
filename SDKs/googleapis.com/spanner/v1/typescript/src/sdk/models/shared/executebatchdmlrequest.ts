import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RequestOptions } from "./requestoptions";
import { Statement } from "./statement";
import { TransactionSelector } from "./transactionselector";



// ExecuteBatchDmlRequest
/** 
 * The request for ExecuteBatchDml.
**/
export class ExecuteBatchDmlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestOptions" })
  requestOptions?: RequestOptions;

  @SpeakeasyMetadata({ data: "json, name=seqno" })
  seqno?: string;

  @SpeakeasyMetadata({ data: "json, name=statements", elemType: Statement })
  statements?: Statement[];

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: TransactionSelector;
}
