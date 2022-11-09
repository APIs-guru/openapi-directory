import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExecuteSqlQueryResponse
/** 
 * A response returned by the connection after executing the sql query.
**/
export class ExecuteSqlQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=results" })
  results?: Map<string, any>[];
}
