import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryOperator } from "./queryoperator";
import { Source } from "./source";



// QuerySource
/** 
 * List of sources that the user can search using the query API.
**/
export class QuerySource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=operators", elemType: QueryOperator })
  operators?: QueryOperator[];

  @SpeakeasyMetadata({ data: "json, name=shortName" })
  shortName?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;
}
