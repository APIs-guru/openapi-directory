import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeySet } from "./keyset";
import { PartitionOptions } from "./partitionoptions";
import { TransactionSelector } from "./transactionselector";



// PartitionReadRequest
/** 
 * The request for PartitionRead
**/
export class PartitionReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: string[];

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: string;

  @SpeakeasyMetadata({ data: "json, name=keySet" })
  keySet?: KeySet;

  @SpeakeasyMetadata({ data: "json, name=partitionOptions" })
  partitionOptions?: PartitionOptions;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: TransactionSelector;
}
