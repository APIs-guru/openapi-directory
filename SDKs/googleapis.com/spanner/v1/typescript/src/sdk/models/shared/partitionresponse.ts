import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Partition } from "./partition";
import { Transaction } from "./transaction";



// PartitionResponse
/** 
 * The response for PartitionQuery or PartitionRead
**/
export class PartitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partitions", elemType: Partition })
  partitions?: Partition[];

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: Transaction;
}
