import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchApplicationUserStats } from "./searchapplicationuserstats";


export class GetSearchApplicationUserStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=stats", elemType: shared.SearchApplicationUserStats })
  stats?: SearchApplicationUserStats[];
}
