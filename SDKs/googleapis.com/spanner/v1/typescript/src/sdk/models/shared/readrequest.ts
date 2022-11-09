import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeySet } from "./keyset";
import { RequestOptions } from "./requestoptions";
import { TransactionSelector } from "./transactionselector";


// ReadRequest
/** 
 * The request for Read and StreamingRead.
**/
export class ReadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns" })
  columns?: string[];

  @Metadata({ data: "json, name=index" })
  index?: string;

  @Metadata({ data: "json, name=keySet" })
  keySet?: KeySet;

  @Metadata({ data: "json, name=limit" })
  limit?: string;

  @Metadata({ data: "json, name=partitionToken" })
  partitionToken?: string;

  @Metadata({ data: "json, name=requestOptions" })
  requestOptions?: RequestOptions;

  @Metadata({ data: "json, name=resumeToken" })
  resumeToken?: string;

  @Metadata({ data: "json, name=table" })
  table?: string;

  @Metadata({ data: "json, name=transaction" })
  transaction?: TransactionSelector;
}
