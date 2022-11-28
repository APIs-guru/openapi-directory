import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchApplicationQueryStats } from "./searchapplicationquerystats";



// GetSearchApplicationQueryStatsResponse
/** 
 * Response format for getting query stats for a search application between given dates.
**/
export class GetSearchApplicationQueryStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stats", elemType: SearchApplicationQueryStats })
  stats?: SearchApplicationQueryStats[];

  @SpeakeasyMetadata({ data: "json, name=totalQueryCount" })
  totalQueryCount?: string;
}
