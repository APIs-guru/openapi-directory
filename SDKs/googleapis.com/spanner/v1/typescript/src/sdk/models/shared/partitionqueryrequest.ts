import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Type } from "./type";
import { PartitionOptions } from "./partitionoptions";
import { TransactionSelector } from "./transactionselector";



// PartitionQueryRequest
/** 
 * The request for PartitionQuery
**/
export class PartitionQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paramTypes", elemType: Type })
  paramTypes?: Map<string, Type>;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=partitionOptions" })
  partitionOptions?: PartitionOptions;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: TransactionSelector;
}
