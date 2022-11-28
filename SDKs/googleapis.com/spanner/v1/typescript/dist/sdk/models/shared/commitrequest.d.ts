import { SpeakeasyBase } from "../../../internal/utils";
import { Mutation } from "./mutation";
import { RequestOptions } from "./requestoptions";
import { TransactionOptions } from "./transactionoptions";
/**
 * The request for Commit.
**/
export declare class CommitRequest extends SpeakeasyBase {
    mutations?: Mutation[];
    requestOptions?: RequestOptions;
    returnCommitStats?: boolean;
    singleUseTransaction?: TransactionOptions;
    transactionId?: string;
}
