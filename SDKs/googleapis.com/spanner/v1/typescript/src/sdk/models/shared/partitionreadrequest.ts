import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeySet } from "./keyset";
import { PartitionOptions } from "./partitionoptions";
import { TransactionSelector } from "./transactionselector";


// PartitionReadRequest
/** 
 * The request for PartitionRead
**/
export class PartitionReadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns" })
  columns?: string[];

  @Metadata({ data: "json, name=index" })
  index?: string;

  @Metadata({ data: "json, name=keySet" })
  keySet?: KeySet;

  @Metadata({ data: "json, name=partitionOptions" })
  partitionOptions?: PartitionOptions;

  @Metadata({ data: "json, name=table" })
  table?: string;

  @Metadata({ data: "json, name=transaction" })
  transaction?: TransactionSelector;
}
