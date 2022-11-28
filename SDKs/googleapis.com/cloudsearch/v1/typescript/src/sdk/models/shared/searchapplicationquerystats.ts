import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { QueryCountByStatus } from "./querycountbystatus";



// SearchApplicationQueryStats
/** 
 * Search application level query stats per date
**/
export class SearchApplicationQueryStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=queryCountByStatus", elemType: QueryCountByStatus })
  queryCountByStatus?: QueryCountByStatus[];
}
