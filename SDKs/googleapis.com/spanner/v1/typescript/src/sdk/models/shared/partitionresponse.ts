import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Partition } from "./partition";
import { Transaction } from "./transaction";


// PartitionResponse
/** 
 * The response for PartitionQuery or PartitionRead
**/
export class PartitionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=partitions", elemType: shared.Partition })
  partitions?: Partition[];

  @Metadata({ data: "json, name=transaction" })
  transaction?: Transaction;
}
