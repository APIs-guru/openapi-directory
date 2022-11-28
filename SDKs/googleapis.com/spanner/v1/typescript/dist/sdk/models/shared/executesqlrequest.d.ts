import { SpeakeasyBase } from "../../../internal/utils";
import { Type } from "./type";
import { QueryOptions } from "./queryoptions";
import { RequestOptions } from "./requestoptions";
import { TransactionSelector } from "./transactionselector";
export declare enum ExecuteSqlRequestQueryModeEnum {
    Normal = "NORMAL",
    Plan = "PLAN",
    Profile = "PROFILE"
}
/**
 * The request for ExecuteSql and ExecuteStreamingSql.
**/
export declare class ExecuteSqlRequest extends SpeakeasyBase {
    paramTypes?: Map<string, Type>;
    params?: Map<string, any>;
    partitionToken?: string;
    queryMode?: ExecuteSqlRequestQueryModeEnum;
    queryOptions?: QueryOptions;
    requestOptions?: RequestOptions;
    resumeToken?: string;
    seqno?: string;
    sql?: string;
    transaction?: TransactionSelector;
}
