import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Leaderboard } from "./leaderboard";



// LeaderboardListResponse
/** 
 * A list of leaderboard objects.
**/
export class LeaderboardListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Leaderboard })
  items?: Leaderboard[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
