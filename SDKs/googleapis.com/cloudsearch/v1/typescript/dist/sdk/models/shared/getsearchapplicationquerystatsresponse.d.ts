import { SpeakeasyBase } from "../../../internal/utils";
import { SearchApplicationQueryStats } from "./searchapplicationquerystats";
/**
 * Response format for getting query stats for a search application between given dates.
**/
export declare class GetSearchApplicationQueryStatsResponse extends SpeakeasyBase {
    stats?: SearchApplicationQueryStats[];
    totalQueryCount?: string;
}
