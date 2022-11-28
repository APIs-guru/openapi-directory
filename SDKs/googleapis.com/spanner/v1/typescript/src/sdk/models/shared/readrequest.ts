import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeySet } from "./keyset";
import { RequestOptions } from "./requestoptions";
import { TransactionSelector } from "./transactionselector";



// ReadRequest
/** 
 * The request for Read and StreamingRead.
**/
export class ReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: string[];

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: string;

  @SpeakeasyMetadata({ data: "json, name=keySet" })
  keySet?: KeySet;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "json, name=partitionToken" })
  partitionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=requestOptions" })
  requestOptions?: RequestOptions;

  @SpeakeasyMetadata({ data: "json, name=resumeToken" })
  resumeToken?: string;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: TransactionSelector;
}
