import { SpeakeasyBase } from "../../../internal/utils";
import { KeySet } from "./keyset";
import { PartitionOptions } from "./partitionoptions";
import { TransactionSelector } from "./transactionselector";
/**
 * The request for PartitionRead
**/
export declare class PartitionReadRequest extends SpeakeasyBase {
    columns?: string[];
    index?: string;
    keySet?: KeySet;
    partitionOptions?: PartitionOptions;
    table?: string;
    transaction?: TransactionSelector;
}
