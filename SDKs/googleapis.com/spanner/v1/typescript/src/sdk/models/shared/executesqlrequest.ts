import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Type } from "./type";
import { QueryOptions } from "./queryoptions";
import { RequestOptions } from "./requestoptions";
import { TransactionSelector } from "./transactionselector";


export enum ExecuteSqlRequestQueryModeEnum {
    Normal = "NORMAL",
    Plan = "PLAN",
    Profile = "PROFILE"
}


// ExecuteSqlRequest
/** 
 * The request for ExecuteSql and ExecuteStreamingSql.
**/
export class ExecuteSqlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paramTypes", elemType: Type })
  paramTypes?: Map<string, Type>;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=partitionToken" })
  partitionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=queryMode" })
  queryMode?: ExecuteSqlRequestQueryModeEnum;

  @SpeakeasyMetadata({ data: "json, name=queryOptions" })
  queryOptions?: QueryOptions;

  @SpeakeasyMetadata({ data: "json, name=requestOptions" })
  requestOptions?: RequestOptions;

  @SpeakeasyMetadata({ data: "json, name=resumeToken" })
  resumeToken?: string;

  @SpeakeasyMetadata({ data: "json, name=seqno" })
  seqno?: string;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: TransactionSelector;
}
