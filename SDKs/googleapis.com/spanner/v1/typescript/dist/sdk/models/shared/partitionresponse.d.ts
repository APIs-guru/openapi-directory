import { SpeakeasyBase } from "../../../internal/utils";
import { Partition } from "./partition";
import { Transaction } from "./transaction";
/**
 * The response for PartitionQuery or PartitionRead
**/
export declare class PartitionResponse extends SpeakeasyBase {
    partitions?: Partition[];
    transaction?: Transaction;
}
