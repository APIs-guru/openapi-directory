import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Leaderboard } from "./leaderboard";


// LeaderboardListResponse
/** 
 * A list of leaderboard objects.
**/
export class LeaderboardListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Leaderboard })
  items?: Leaderboard[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
