import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExecuteSqlQueryResponse
/** 
 * A response returned by the connection after executing the sql query.
**/
export class ExecuteSqlQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: Map<string, any>[];
}
