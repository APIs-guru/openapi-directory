import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Query
/** 
 * A wrapper around the SQL query statement. This is needed so that the JSON representation of ExecuteSqlQueryRequest has the following format: `{"query":"select *"}`.
**/
export class Query extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;
}
