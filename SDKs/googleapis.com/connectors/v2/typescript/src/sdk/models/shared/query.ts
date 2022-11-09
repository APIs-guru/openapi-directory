import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Query
/** 
 * A wrapper around the SQL query statement. This is needed so that the JSON representation of ExecuteSqlQueryRequest has the following format: `{"query":"select *"}`.
**/
export class Query extends SpeakeasyBase {
  @Metadata({ data: "json, name=query" })
  query?: string;
}
