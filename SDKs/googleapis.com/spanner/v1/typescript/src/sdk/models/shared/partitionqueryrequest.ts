import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Type } from "./type";
import { PartitionOptions } from "./partitionoptions";
import { TransactionSelector } from "./transactionselector";


// PartitionQueryRequest
/** 
 * The request for PartitionQuery
**/
export class PartitionQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=paramTypes", elemType: shared.Type })
  paramTypes?: Map<string, Type>;

  @Metadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @Metadata({ data: "json, name=partitionOptions" })
  partitionOptions?: PartitionOptions;

  @Metadata({ data: "json, name=sql" })
  sql?: string;

  @Metadata({ data: "json, name=transaction" })
  transaction?: TransactionSelector;
}
