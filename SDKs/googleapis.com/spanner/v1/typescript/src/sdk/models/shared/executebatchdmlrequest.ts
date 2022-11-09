import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RequestOptions } from "./requestoptions";
import { Statement } from "./statement";
import { TransactionSelector } from "./transactionselector";


// ExecuteBatchDmlRequest
/** 
 * The request for ExecuteBatchDml.
**/
export class ExecuteBatchDmlRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestOptions" })
  requestOptions?: RequestOptions;

  @Metadata({ data: "json, name=seqno" })
  seqno?: string;

  @Metadata({ data: "json, name=statements", elemType: shared.Statement })
  statements?: Statement[];

  @Metadata({ data: "json, name=transaction" })
  transaction?: TransactionSelector;
}
