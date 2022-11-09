import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Type } from "./type";
import { QueryOptions } from "./queryoptions";
import { RequestOptions } from "./requestoptions";
import { TransactionSelector } from "./transactionselector";

export enum ExecuteSqlRequestQueryModeEnum {
    Normal = "NORMAL"
,    Plan = "PLAN"
,    Profile = "PROFILE"
}


// ExecuteSqlRequest
/** 
 * The request for ExecuteSql and ExecuteStreamingSql.
**/
export class ExecuteSqlRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=paramTypes", elemType: shared.Type })
  paramTypes?: Map<string, Type>;

  @Metadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @Metadata({ data: "json, name=partitionToken" })
  partitionToken?: string;

  @Metadata({ data: "json, name=queryMode" })
  queryMode?: ExecuteSqlRequestQueryModeEnum;

  @Metadata({ data: "json, name=queryOptions" })
  queryOptions?: QueryOptions;

  @Metadata({ data: "json, name=requestOptions" })
  requestOptions?: RequestOptions;

  @Metadata({ data: "json, name=resumeToken" })
  resumeToken?: string;

  @Metadata({ data: "json, name=seqno" })
  seqno?: string;

  @Metadata({ data: "json, name=sql" })
  sql?: string;

  @Metadata({ data: "json, name=transaction" })
  transaction?: TransactionSelector;
}
