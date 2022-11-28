import { SpeakeasyBase } from "../../../internal/utils";
import { Type } from "./type";
import { PartitionOptions } from "./partitionoptions";
import { TransactionSelector } from "./transactionselector";
/**
 * The request for PartitionQuery
**/
export declare class PartitionQueryRequest extends SpeakeasyBase {
    paramTypes?: Map<string, Type>;
    params?: Map<string, any>;
    partitionOptions?: PartitionOptions;
    sql?: string;
    transaction?: TransactionSelector;
}
