import { SpeakeasyBase } from "../../../internal/utils";
import { KeySet } from "./keyset";
import { RequestOptions } from "./requestoptions";
import { TransactionSelector } from "./transactionselector";
/**
 * The request for Read and StreamingRead.
**/
export declare class ReadRequest extends SpeakeasyBase {
    columns?: string[];
    index?: string;
    keySet?: KeySet;
    limit?: string;
    partitionToken?: string;
    requestOptions?: RequestOptions;
    resumeToken?: string;
    table?: string;
    transaction?: TransactionSelector;
}
