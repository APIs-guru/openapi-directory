import { SpeakeasyBase } from "../../../internal/utils";
import { RequestOptions } from "./requestoptions";
import { Statement } from "./statement";
import { TransactionSelector } from "./transactionselector";
/**
 * The request for ExecuteBatchDml.
**/
export declare class ExecuteBatchDmlRequest extends SpeakeasyBase {
    requestOptions?: RequestOptions;
    seqno?: string;
    statements?: Statement[];
    transaction?: TransactionSelector;
}
