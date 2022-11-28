import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SearchApplicationUserStats } from "./searchapplicationuserstats";



export class GetSearchApplicationUserStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stats", elemType: SearchApplicationUserStats })
  stats?: SearchApplicationUserStats[];
}
