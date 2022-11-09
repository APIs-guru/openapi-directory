import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Query } from "./query";


// ExecuteSqlQueryRequest
/** 
 * An execute sql query request containing the query and the connection to execute it on.
**/
export class ExecuteSqlQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=query" })
  query?: Query;
}
