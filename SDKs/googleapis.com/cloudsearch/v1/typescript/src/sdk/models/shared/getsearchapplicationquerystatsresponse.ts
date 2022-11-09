import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchApplicationQueryStats } from "./searchapplicationquerystats";


// GetSearchApplicationQueryStatsResponse
/** 
 * Response format for getting query stats for a search application between given dates.
**/
export class GetSearchApplicationQueryStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=stats", elemType: shared.SearchApplicationQueryStats })
  stats?: SearchApplicationQueryStats[];

  @Metadata({ data: "json, name=totalQueryCount" })
  totalQueryCount?: string;
}
