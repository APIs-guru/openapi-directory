import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QueryOperator } from "./queryoperator";
import { Source } from "./source";


// QuerySource
/** 
 * List of sources that the user can search using the query API.
**/
export class QuerySource extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=operators", elemType: shared.QueryOperator })
  operators?: QueryOperator[];

  @Metadata({ data: "json, name=shortName" })
  shortName?: string;

  @Metadata({ data: "json, name=source" })
  source?: Source;
}
