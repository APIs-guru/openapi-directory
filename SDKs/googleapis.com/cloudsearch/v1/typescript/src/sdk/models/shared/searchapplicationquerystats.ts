import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Date } from "./date";
import { QueryCountByStatus } from "./querycountbystatus";


// SearchApplicationQueryStats
/** 
 * Search application level query stats per date
**/
export class SearchApplicationQueryStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=queryCountByStatus", elemType: shared.QueryCountByStatus })
  queryCountByStatus?: QueryCountByStatus[];
}
